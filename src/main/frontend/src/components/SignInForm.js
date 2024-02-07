import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//import Login from '../hooks/Login';

const SigInForm = ({ persistentData, setPersistentData }) => {

    const navigate = useNavigate();
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

        axios.post(url, parameter).then(response => {

            savePersistentData(response.data.access_token);

        }).catch(response => {
            console.log(response + " Error: " + response.data)
        })

        navigate('/');
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
            <Container fluid fluid bg="light" data-bs-theme="light" className="bg-body-secondary">
                <div class="container col-xxl-8 px-4 py-5">
                    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div class="col-10 col-sm-8 col-lg-6">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                        </div>
                        <div class="col-lg-6">
                            <h1 class="display-5 fw-bold lh-1 mb-3">Sign in</h1>
                            <p class="lead" style={{ textAlign: 'justify' }}>Welcome back! Ready to savor more flavors? Sign in to your account and continue your culinary journey with our vibrant recipe-sharing community.</p>

                            <Form onSubmit={submitSignIn}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="userName" placeholder="Enter your user name" onChange={changeHandler} />
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Enter your password" onChange={changeHandler} />
                                </Form.Group>
                                <button type="submit" className="btn btn-dark btn-lg px-4 mt-4">Sign in</button>

                            </Form>

                        </div>
                    </div>
                </div>
            </Container>
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