import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Login from './Login';

const LoggedIn = ({ persistentData, setPersistentData }) => {

    const [isLoggedIn, setLoggedIn] = useState([]);
    const [userRole, setUserRole] = useState([]);

    /*const savePersistentData = () => {
        setPersistentData(inputValue);
    };*/

    useEffect(() => {

        const token = "Bearer " + persistentData;

        const headers = {
          'Authorization': token
        };

        axios.get('http://localhost:8080/api/v1/signedIn', {headers: headers})
            .then(response => {

                setLoggedIn(response.data[0]);
                setUserRole(response.data[1]);
            })
            .catch(error => {
                setLoggedIn(false);
            });
    });

    return (
        <div>
            {
                !isLoggedIn ? (
                    <p>User is not logged in</p>
                ) : (isLoggedIn === "anonymousUser" ? (
                    <p>User is not logged in</p>
                ) : (isLoggedIn !== "anonymousUser" ? (
                    <p>Hello {isLoggedIn} you are signed in as: {userRole}</p>
                ) : (
                    <p>User is not logged in</p>
                )))
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    persistentData: state.persistentData,
});

const mapDispatchToProps = (dispatch) => ({
    setPersistentData: (data) => dispatch({ type: 'SET_PERSISTENT_DATA', payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
//export default LoggedIn;