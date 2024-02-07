import React, {useState, useEffect} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import UpdateRecipe from '../hooks/UpdateRecipe';
import DeleteRecipe from '../hooks/DeleteRecipe';

const UpdateRecipeModal = ({recipeChanges}) => {

    const [recipe, setRecipe] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [errors, setErrors] = useState({});
    const recipeFields = recipeChanges;

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
    useEffect(() => {
        setRecipe(recipeChanges);
    }, []);
    */

    return (
        <>
            <Navbar>
                <Container fluid>
                    <Navbar.Collapse className="justify-content-end">
                        <Button variant="outline-success" className="btn btn-dark btn-lg px-4 mx-2" onClick={handleShow}>Update recipe</Button>
                        <DeleteRecipe recipeId={recipeChanges.id}/>
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
                    {/*
                    <form>
                        <div>
                            <label>Heading...</label>
                            <br />
                            <input type='text' name="heading" defaultValue={recipeFields.heading || ''} onChange={changeHandler}/>
                            <br />
                            <label>Rating...</label>
                            <br />
                            <input type='text' name="rating" defaultValue={recipeFields.rating || ''} onChange={changeHandler}/>
                            <br />
                            <label>description...</label>
                            <br />
                            <input type='text' name="description" defaultValue={recipeFields.description || ''} onChange={changeHandler}/>
                            <br />
                            <label>preparationTimeMinutes...</label>
                            <br />
                            <input type='text' name="preparationTimeMinutes" defaultValue={recipeFields.preparationTimeMinutes || ''} onChange={changeHandler}/>
                            <br />
                            <label>cookingTimeMinutes...</label>
                            <br />
                            <input type='text' name="cookingTimeMinutes" defaultValue={recipeFields.cookingTimeMinutes || ''} onChange={changeHandler}/>
                            <br />
                            <label>serves...</label>
                            <br />
                            <input type='text' name="serves" defaultValue={recipeFields.serves || ''} onChange={changeHandler}/>
                            <br />
                            <label>difficulty...</label>
                            <br />
                            <input type='text' name="difficulty" defaultValue={recipeFields.difficulty || ''} onChange={changeHandler}/>
                            <br />
                            <label>ingredients...</label>
                            <br />
                            <input type='text' name="ingredients" defaultValue={recipeFields.ingredients || ''} onChange={changeHandler}/>
                            <br />
                            <label>method...</label>
                            <br />
                            <input type='text' name="method" defaultValue={recipeFields.method || ''} onChange={changeHandler}/>

                        </div>
                    </form>
                    */}

                    <Form>
                        <Form.Group controlId="formHeading">
                            <Form.Label>Heading</Form.Label>
                            <Form.Control type="text" name="heading" defaultValue={recipeFields.heading || ''} isInvalid={!!errors.heading} onChange={changeHandler} />
                            {/*errors.heading && <Alert variant="danger">{errors.heading}</Alert>*/}
                            <Form.Control.Feedback type="invalid">{errors.heading}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formRating">
                            <Form.Label>Rating</Form.Label>
                            {/*<Form.Control type="text" name="rating" placeholder="Enter the rating" onChange={changeHandler} />*/}
                            <Form.Select aria-label="Default select example" name="rating" defaultValue={recipeFields.rating || ''} isInvalid={!!errors.rating} onChange={changeHandler} >
                                <option disabled>Select rating</option>
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
                            <Form.Control type="text" name="description" defaultValue={recipeFields.description || ''} isInvalid={!!errors.description} onChange={changeHandler} />
                            <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formPreparationTimeMinutes">
                            <Form.Label>Preparation time (minutes)</Form.Label>
                            <Form.Control type="text" name="preparationTimeMinutes" defaultValue={recipeFields.preparationTimeMinutes || ''} isInvalid={!!errors.preparationTimeMinutes} onChange={changeHandler} />
                            <Form.Control.Feedback type="invalid">{errors.preparationTimeMinutes}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formCookingTimeMinutes">
                            <Form.Label>Cooking time (minutes)</Form.Label>
                            <Form.Control type="text" name="cookingTimeMinutes" defaultValue={recipeFields.cookingTimeMinutes || ''} isInvalid={!!errors.cookingTimeMinutes} onChange={changeHandler} />
                            <Form.Control.Feedback type="invalid">{errors.cookingTimeMinutes}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formServes">
                            <Form.Label>Serves</Form.Label>
                            <Form.Control type="text" name="serves" defaultValue={recipeFields.serves || ''} isInvalid={!!errors.serves} onChange={changeHandler} />
                            <Form.Control.Feedback type="invalid">{errors.serves}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formDifficulty">
                            <Form.Label>Difficulty</Form.Label>
                            {/*<Form.Control type="text" name="difficulty" placeholder="Enter the difficulty challenge" onChange={changeHandler} />*/}
                            <Form.Select aria-label="Default select example" name="difficulty" defaultValue={recipeFields.difficulty || ''} isInvalid={!!errors.difficulty} onChange={changeHandler} >
                                <option disabled>Select difficulty</option>
                                <option value="1">Easy</option>
                                <option value="2">Medium</option>
                                <option value="3">Hard</option>#
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">{errors.difficulty}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formIngredients">
                            <Form.Label>Ingredients</Form.Label>
                            <Form.Control type="text" name="ingredients" defaultValue={recipeFields.ingredients || ''} isInvalid={!!errors.ingredients} onChange={changeHandler} />
                            <Form.Control.Feedback type="invalid">{errors.ingredients}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formMethod">
                            <Form.Label>Method</Form.Label>
                            <Form.Control type="text" name="method" defaultValue={recipeFields.method || ''} isInvalid={!!errors.method} onChange={changeHandler} />
                            <Form.Control.Feedback type="invalid">{errors.method}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formUrlImaged">
                            <Form.Label>Method</Form.Label>
                            <Form.Control type="text" name="urlImaged" defaultValue={recipeFields.urlImaged || ''} isInvalid={!!errors.urlImaged} onChange={changeHandler} />
                            <Form.Control.Feedback type="invalid">{errors.urlImaged}</Form.Control.Feedback>
                        </Form.Group>
                    </Form>



                </Modal.Body>
                <Modal.Footer>
                    {/*<Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                    */}

                    <UpdateRecipe updateFields={{id: recipeFields.id, recipeFields: recipe}} errors={errors}/>
                </Modal.Footer>

            </Modal>

        </>
    );
};

export default UpdateRecipeModal