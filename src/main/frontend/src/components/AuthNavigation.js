import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import App from '../App';

import { Link } from "react-router-dom";

const AuthNavigation = ({persistentData, setPersistentData}) => {

    const [isSignedIn, setSignedIn] = useState([]);
    const [userRole, setUserRole] = useState([]);

    /*const savePersistentData = () => {
        setPersistentData(inputValue);
    };*/

    useEffect(() => {

        const token = "Bearer " + persistentData;

        const headers = {
          'Authorization': token
        };

        const url = "http://localhost:8080/api/v1/signedIn"

        axios.get(url, {headers: headers}).then(response => {

                setSignedIn(response.data[0]);
                setUserRole(response.data[1]);
            })
            .catch(error => {
                setSignedIn(false);
                setUserRole("");
            });
    });

    return (
        <>
            {
                !isSignedIn ? (
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to={"/signIn"}>Sign in</Nav.Link>
                        <Nav.Link as={Link} to={"/signUp"}>Sign up</Nav.Link>
                        <p id="userRole" style={{ visibility: 'hidden' }}>{userRole}</p>
                    </Nav>
                ) : (isSignedIn === "anonymousUser" ? (
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to={"/signIn"}>Sign in</Nav.Link>
                        <Nav.Link as={Link} to={"/signUp"}>Sign up</Nav.Link>
                        <p id="userRole" style={{ visibility: 'hidden' }}>{userRole}</p>
                    </Nav>
                ) : (isSignedIn !== "anonymousUser" ? (
                    <Nav className="ml-auto">
                        <Navbar.Text>
                            {isSignedIn} ({userRole})
                        </Navbar.Text>
                        <Nav.Link as={Link} to={"/signOut"}>Logout</Nav.Link>
                        <p id="userRole" style={{ visibility: 'hidden' }}>{userRole}</p>
                    </Nav>
                ) : (
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to={"/signIn"}>Sign in</Nav.Link>
                        <Nav.Link as={Link} to={"/signUp"}>Sign up</Nav.Link>
                        <p id="userRole" style={{ visibility: 'hidden' }}>{userRole}</p>
                    </Nav>
                )))

            }


        </>
    );
}

const mapStateToProps = (state) => ({
    persistentData: state.persistentData,
});

const mapDispatchToProps = (dispatch) => ({
    setPersistentData: (data) => dispatch({ type: 'SET_PERSISTENT_DATA', payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthNavigation);
//export default LoggedIn;