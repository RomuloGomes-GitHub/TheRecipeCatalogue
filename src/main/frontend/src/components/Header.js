import React, {useState, useEffect} from "react";

import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Header = () => {

    return (
        <header>

            <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#home">The Recipe Catalogue</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
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


/*
const UpdateRecipeForm = (recipeId) => {

    const [recipes, setRecipes] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateRecipe = (event) => {

        event.preventDefault();
        const url = "http://localhost:8080/api/v1/recipe"
        const parameter = "/" + recipeId.id + "?heading="

        console.log(">>>>>>>>>>>>>>>>>>>>>" + recipeId.id + "----" + recipes + "parameter:" + parameter + "----" + recipes.heading)
        console.log("2222222222>>" + url + parameter + recipes)
        console.log("333333333>>" + url + parameter + recipes.heading)

        axios.put(url + parameter + recipes.heading).then(response => {
            console.log("Item updated");
        }).catch(response => {
            console.log(response + "Error: " + response.data);
        })

        window.location.reload(false);
    }


    const submitRecipe = (event) => {

        event.preventDefault();
        const url = "http://localhost:8080/api/v1/recipe"
        const parameter = "/" + recipeId.id

        axios.post(url + parameter, recipes).then(response => {
            console.log("Item added");
        }).catch(response => {
            console.log(response + "Error: " + response.data)
        })

        window.location.reload(false);
    }

    const changeHandler = (event) => {

        event.preventDefault()
        setRecipes((previousData) => ({
            ...previousData,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Update
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
                    escape key>>>>> {recipeId.id}

                    <form onSubmit={updateRecipe}>
                        <div>
                            <label>Heading...</label>
                            <br />
                            <input type='text' name="heading" value={recipes.heading || ''} onChange={changeHandler}/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UpdateRecipeForm

*/