import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import axios from "axios";

import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//import Login from '../hooks/Login';

const SignOutCall = ({ persistentData, setPersistentData }) => {

    const navigate = useNavigate();
    var userRoleCheck = document.getElementById('userRole').textContent;

    const [user, setUser] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const savePersistentData = (tokenReceived) => {
        setPersistentData(tokenReceived);
    };

    useEffect(() => {

        const token = "Bearer " + persistentData;

        const headers = {
          'Authorization': token
        };

        const urlHost = window.location.origin;
        const url = urlHost + "/logout";

        axios.post(url, {}, {headers: headers}).then(response => {
            savePersistentData("");
        }).catch(response => {
            console.log(response + " Error: " + response.data)
        })

        navigate('/');
        window.location.reload(true);

    }, []);

    const changeHandler = (event) => {

        event.preventDefault()
        setUser((previousData) => ({
            ...previousData,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <>
            <p>Thanks for visiting us</p>

        </>
    );
};

const mapStateToProps = (state) => ({
    persistentData: state.persistentData,
});

const mapDispatchToProps = (dispatch) => ({
    setPersistentData: (data) => dispatch({ type: 'SET_PERSISTENT_DATA', payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignOutCall);
//export default SigInForm