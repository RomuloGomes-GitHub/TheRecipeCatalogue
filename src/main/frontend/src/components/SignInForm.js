import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import axios from "axios";

import Button from 'react-bootstrap/Button';

//import Login from '../hooks/Login';

const SigInForm = ({ persistentData, setPersistentData }) => {

    const [user, setUser] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //const recipeFields = recipeReceived.recipe;

    const savePersistentData = (tokenReceived) => {
        setPersistentData(tokenReceived);
    };

    const submitSignIn = (event) => {

        event.preventDefault()
        const url = "http://localhost:8080/api/v1/auth/authenticate";
        const parameter = user;

        console.log(parameter);
        axios.post(url, parameter).then(response => {

            savePersistentData(response.data.access_token);//
            console.log("PersistentData: " + response);
            console.log("PersistentData: " + response.data.access_token);
            console.log(response);
            //callWithToken(url, parameter, response.data.access_token);

        }).catch(response => {
            console.log(response + " Error: " + response.data)
        })

        //window.location.reload(false);
    }

    const changeHandler = (event) => {

        event.preventDefault()
        setUser((previousData) => ({
            ...previousData,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <>
            <form onSubmit={submitSignIn} method="post">
                <div>
                    <label>User Name...</label>
                    <br />
                    <input type='text' name="userName" placeholder="User Name" onChange={changeHandler}/>
                    <br />
                    <label>Password...</label>
                    <br />
                    <input type='text' name="password" placeholder="Password" onChange={changeHandler}/>

                </div>
                <Button type="submit">Submit</Button>
            </form>
            {/*<Login userLogin={user} onClick={handleClose} />*/}

        </>
    );
};

const mapStateToProps = (state) => ({
    persistentData: state.persistentData,
});

const mapDispatchToProps = (dispatch) => ({
    setPersistentData: (data) => dispatch({ type: 'SET_PERSISTENT_DATA', payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SigInForm);
//export default SigInForm