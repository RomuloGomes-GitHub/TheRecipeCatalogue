import React, { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';

import AddNewRecipeModal from '../components/AddNewRecipeModal';
import GetRecipes from '../hooks/GetRecipes';

const AddNewRecipeBar = () => {

    const [show, setShow] = useState(false);
    const target = useRef(null);
    var userRoleCheck = "";

    if(document.getElementById('userRole') != null){
        userRoleCheck = document.getElementById('userRole').textContent;
    }

    useEffect(() => {
        if(document.getElementById('userRole') != null){
            userRoleCheck = document.getElementById('userRole').textContent;
        }
    });

    return (
        <Container fluid>

            {
                userRoleCheck == "ADMIN" ? (
                    <AddNewRecipeModal />)
                : (
                    <Navbar>
                        <Container fluid>
                            <Navbar.Collapse className="justify-content-end">
                                <Button variant="outline-success" ref={target} onClick={() => setShow(!show)} className="btn btn-dark btn-lg px-4 mx-2">
                                    Add new recipe
                                </Button>
                                <Overlay target={target.current} show={show} placement="left">
                                    {({
                                        placement: _placement,
                                        arrowProps: _arrowProps,
                                        show: _show,
                                        popper: _popper,
                                        hasDoneInitialMeasure: _hasDoneInitialMeasure,
                                        ...props
                                    }) => (
                                        <div
                                            {...props}
                                            style={{
                                            position: 'absolute',
                                            backgroundColor: 'rgba(255, 100, 100, 0.85)',
                                            padding: '2px 10px',
                                            color: 'white',
                                            borderRadius: 3,
                                            ...props.style,
                                        }}
                                        >
                                            Only for admin users
                                        </div>
                                    )}
                                </Overlay>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>)
            }

        </Container>
    )
}

export default AddNewRecipeBar;