import React, { useState, useEffect} from "react";
import { connect } from 'react-redux';

import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Overlay from 'react-bootstrap/Overlay';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import LoginModal from '../components/LoginModal';
import AuthNavigation from '../components/AuthNavigation';
import AddNewRecipeModal from '../components/AddNewRecipeModal';

const Header = () => {


    return (
        <header>

            <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand as={Link} to={"/"} style={{ zIndex: 2000 }}>The Recipe Catalogue</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end" style={{ zIndex: 2000 }}>
                        <AuthNavigation />
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/recipes"}>Recipes</Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                            {/*<
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                            */}
                        </Nav>
                        {/*<Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>*/}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/*
            <Navbar bg="light" data-bs-theme="light" className="bg-body-secondary">
                <Container fluid>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                            Library
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </Navbar>
            */}

        </header>
    )
}


const mapStateToProps = (state) => ({
    persistentData: state.persistentData,
});

const mapDispatchToProps = (dispatch) => ({
    setPersistentData: (data) => dispatch({ type: 'SET_PERSISTENT_DATA', payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
//export default Header;
/*
 {
                            userRoleCheck == "ADMIN" ? (
                                <button type="submit" className="btn btn-dark btn-lg px-4 mt-4">Sign in</button>)
                            : (userRoleCheck == "USER" ? (
                                <p>2</p>


            <Nav className="ml-auto">
                <Nav.Link  onClick={handleShow}>Add new recipe</Nav.Link>
                <Overlay target={target.current} show={showw} placement="left">
                {({
                  placement: _placement,
                  arrowProps: _arrowProps,
                  showw: _show,
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
                    Simple tooltip
                  </div>
                )}
                </Overlay>
                <Nav.Link  ref={target} onClick={() => setShoww(!showw)}>Add new recipew</Nav.Link>
            </Nav>

                                )
                            : (
                                <p>3</p>)
                            )
                        }

                        */