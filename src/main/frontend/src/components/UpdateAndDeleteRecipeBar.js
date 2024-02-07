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

import UpdateRecipeModal from '../components/UpdateRecipeModal';
import GetRecipes from '../hooks/GetRecipes';

const UpdateAndDeleteRecipeBar = ({recipeChanges}) => {


    const [recipe, setRecipe] = useState([]);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const target1 = useRef(null);
    const target2 = useRef(null);
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
                    <UpdateRecipeModal  recipeChanges={recipeChanges}/>)
                : (
                    <Navbar>
                        <Container fluid>
                            <Navbar.Collapse className="justify-content-end">
                                <Button variant="outline-success" ref={target1} onClick={() => setShow1(!show1)} className="btn btn-dark btn-lg px-4 mx-2">
                                    Update recipe
                                </Button>
                                <Overlay target={target1.current} show={show1} placement="left">
                                    {({
                                        placement: _placement,
                                        arrowProps: _arrowProps,
                                        show1: _show1,
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
                                <Button variant="outline-danger" ref={target2} onClick={() => setShow2(!show2)} className="btn btn-dark btn-lg px-4 mx-2">
                                    Delete recipe
                                </Button>
                                <Overlay target={target2.current} show={show2} placement="left">
                                    {({
                                        placement: _placement,
                                        arrowProps: _arrowProps,
                                        show2: _show2,
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

export default UpdateAndDeleteRecipeBar;