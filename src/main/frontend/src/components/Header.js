import React, {useState, useEffect} from "react";

import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import LoginModal from '../components/LoginModal';
import LoggedIn from '../hooks/LoggedIn';

const Header = () => {

    useEffect(() => {
        const loggedInUser = localStorage.getItem("userName");
        console.log(loggedInUser+" loggedInUserloooooooooooooooged " + Storage.length + " dsa " + Window.localStorage);

        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            console.log(foundUser+"loooooooooooooooged");
        }

    }, []);

    return (
        <header>

            <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#home">The Recipe Catalogue</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <LoggedIn />
                            <LoginModal />

                            <Nav.Link as={Link} to={"/auth"}>Sign In</Nav.Link>

                        </Navbar.Text>
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
                            <Nav.Link as={Link} to={"/demo-contoller"}>Demo</Nav.Link>
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
                            */}
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
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

export default Header;

