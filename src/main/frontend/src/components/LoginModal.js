import React, {useState, useEffect} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Login from '../hooks/Login';

const LoginModal = () => {

    const [user, setUser] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //const recipeFields = recipeReceived.recipe;

    const changeHandler = (event) => {

        event.preventDefault()
        setUser((previousData) => ({
            ...previousData,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Sign in
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    I will not close if you click outside me. Do not even try to press
                    escape key>>>>>

                    <form>
                        <div>
                            <label>User Name...</label>
                            <br />
                            <input type='text' name="userName" placeholder="User Name" onChange={changeHandler}/>
                            <br />
                            <label>Password...</label>
                            <br />
                            <input type='text' name="password" placeholder="Password" onChange={changeHandler}/>

                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    {/*<Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                    */}

                    <Login userLogin={user}/>
                </Modal.Footer>

            </Modal>

        </>
    );
};

export default LoginModal