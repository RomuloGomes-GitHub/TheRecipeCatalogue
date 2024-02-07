import React, {useState, useEffect} from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Overlay from 'react-bootstrap/Overlay';
import Alert from 'react-bootstrap/Alert';

import AddNewRecipe from '../hooks/AddNewRecipe';

const AddNewRecipeModal = () => {

    const [recipe, setRecipe] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState([]);
    //const recipeFields = recipeReceived.recipe;const validationErrors = validateForm(recipe, event.target.value);

    const changeHandler = (event) => {

        event.preventDefault()
        setRecipe((previousData) => ({
            ...previousData,
            [event.target.name]: event.target.value,
        }));

        const validationErrors = validateForm({[event.target.name]: event.target.value });
        setErrors({ ...errors, [event.target.name]: validationErrors[event.target.name]});
    }

    const validateForm = (data) => {
    let errors = {};

        for (const key in data) {
            const value = data[key];
            errors[key] = validateField(key, value)[key];
        }
        return errors;
    };

    const validateField = (name, value) => {
        let validationErrors = {};

        if(name == "heading"){
            if (!isNaN(value)) {
                validationErrors[name] = "Invalid format. Value should a text";
            } else {
                if (value.length < 3 || value.length > 150) {
                    validationErrors[name] = "Invalid format. 3 to 150 characters limit";
                }
            }
        }

        if(name == "rating"){
            if (isNaN(value)) {
                validationErrors[name] = "Invalid format. Value should a number";
            } else {
                if (value <= 0) {
                    validationErrors[name] = "Invalid format. Value should be greater than 0";
                }
            }
        }

        if(name == "description"){
            if (!isNaN(value)) {
                validationErrors[name] = "Invalid format. Value should a text";
            } else {
                if (value.length < 150 || value.length > 250) {
                    validationErrors[name] = "Invalid format. 150 to 250 characters limit";
                }
            }
        }

        if(name == "preparationTimeMinutes"){
            if (isNaN(value)) {
                validationErrors[name] = "Invalid format. Value should a number";
            } else {
                if (value <= 0) {
                    validationErrors[name] = "Invalid format. Value should be greater than 0";
                }
            }
        }

        if(name == "cookingTimeMinutes"){
            if (isNaN(value)) {
                validationErrors[name] = "Invalid format. Value should a number";
            } else {
                if (value <= 0) {
                    validationErrors[name] = "Invalid format. Value should be greater than 0";
                }
            }
        }

        if(name == "serves"){
            if (isNaN(value)) {
                validationErrors[name] = "Invalid format. Value should a number";
            } else {
                if (value <= 0) {
                    validationErrors[name] = "Invalid format. Value should be greater than 0";
                }
            }
        }

        if(name == "difficulty"){
            if (isNaN(value)) {
                validationErrors[name] = "Invalid format. Value should a number ";
            } else {
                if (value <= 0) {
                    validationErrors[name] = "Invalid format. Value should be greater than 0";
                }
            }
        }

        if(name == "ingredients"){
            if (!isNaN(value)) {
                validationErrors[name] = "Invalid format. Value should a text";
            } else {
                if (value.length < 100 || value.length > 500) {
                    validationErrors[name] = "Invalid format. 100 to 500 characters limit";
                }
            }
        }

        if(name == "method"){
            if (!isNaN(value)) {
                validationErrors[name] = "Invalid format. Value should a text";
            } else {
                if (value.length < 100 || value.length > 500) {
                    validationErrors[name] = "Invalid format. 100 to 500 characters limit";
                }
            }
        }

        if(name == "urlImage"){
            if (!isNaN(value)) {
                validationErrors[name] = "Invalid format. Value should a text";
            } else {
                if (value.length < 10 || value.length > 500) {
                    validationErrors[name] = "Invalid format. 10 to 500 characters limit";
                }
            }
        }

        return validationErrors;
    };
    /*
    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };
    */
    //validateForm(recipe);


    return (
        <>
            <Navbar>
                <Container fluid>
                    <Navbar.Collapse className="justify-content-end">
                        <button type="button" className="btn btn-dark btn-lg px-4" onClick={handleShow}>Add new recipe</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

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

                    <Form>
                        <Form.Group controlId="formHeading">
                            <Form.Label>Heading</Form.Label>
                            <Form.Control type="text" name="heading" placeholder="Enter the recipe name" isInvalid={!!errors.heading} onChange={changeHandler} />
                            {/*errors.heading && <Alert variant="danger">{errors.heading}</Alert>*/}
                            <Form.Control.Feedback type="invalid">{errors.heading}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formRating">
                            <Form.Label>Rating</Form.Label>
                            {/*<Form.Control type="text" name="rating" placeholder="Enter the rating" onChange={changeHandler} />*/}
                            <Form.Select aria-label="Default select example" name="rating" isInvalid={!!errors.rating} onChange={changeHandler} >
                                <option>Select rating</option>
                                <option value="1">1 out of 5</option>
                                <option value="2">2 out of 5</option>
                                <option value="3">3 out of 5</option>
                                <option value="4">4 out of 5</option>
                                <option value="5">5 out of 5</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">{errors.rating}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="description" placeholder="Describe the recipe" isInvalid={!!errors.description} onChange={changeHandler} />
                            <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formPreparationTimeMinutes">
                            <Form.Label>Preparation time (minutes)</Form.Label>
                            <Form.Control type="text" name="preparationTimeMinutes" placeholder="Enter the preparation time (minutes)" isInvalid={!!errors.preparationTimeMinutes} onChange={changeHandler} />
                            <Form.Control.Feedback type="invalid">{errors.preparationTimeMinutes}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formCookingTimeMinutes">
                            <Form.Label>Cooking time (minutes)</Form.Label>
                            <Form.Control type="text" name="cookingTimeMinutes" placeholder="Enter the cooking time (minutes)" isInvalid={!!errors.cookingTimeMinutes} onChange={changeHandler} />
                            <Form.Control.Feedback type="invalid">{errors.cookingTimeMinutes}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formServes">
                            <Form.Label>Serves</Form.Label>
                            <Form.Control type="text" name="serves" placeholder="How many people it serves" isInvalid={!!errors.serves} onChange={changeHandler} />
                            <Form.Control.Feedback type="invalid">{errors.serves}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formDifficulty">
                            <Form.Label>Difficulty</Form.Label>
                            {/*<Form.Control type="text" name="difficulty" placeholder="Enter the difficulty challenge" onChange={changeHandler} />*/}
                            <Form.Select aria-label="Default select example" name="difficulty" isInvalid={!!errors.difficulty} onChange={changeHandler} >
                                <option>Select difficulty</option>
                                <option value="1">Easy</option>
                                <option value="2">Medium</option>
                                <option value="3">Hard</option>#
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">{errors.difficulty}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formIngredients">
                            <Form.Label>Ingredients</Form.Label>
                            <Form.Control type="text" name="ingredients" placeholder="Enter the ingredients used in the recipe" isInvalid={!!errors.ingredients} onChange={changeHandler} />
                            <Form.Control.Feedback type="invalid">{errors.ingredients}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formMethod">
                            <Form.Label>Method</Form.Label>
                            <Form.Control type="text" name="method" placeholder="Enter the steps to prepare the recipe" isInvalid={!!errors.method} onChange={changeHandler} />
                            <Form.Control.Feedback type="invalid">{errors.method}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formImageUrlPath">
                            <Form.Label>URL Image</Form.Label>
                            <Form.Control type="text" name="imageUrlPath" placeholder="Enter url from where your image is located" isInvalid={!!errors.imageUrlPath} onChange={changeHandler} />
                            <Form.Control.Feedback type="invalid">{errors.imageUrlPath}</Form.Control.Feedback>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    {/*<Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                    */
                    }

                    <AddNewRecipe recipe={recipe} errors={errors}/>
                </Modal.Footer>

            </Modal>

        </>
    );
};

export default AddNewRecipeModal