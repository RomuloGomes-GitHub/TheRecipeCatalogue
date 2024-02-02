import React, {useState, useEffect} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import AddNewRecipe from '../hooks/AddNewRecipe';

const AddNewRecipeModal = () => {

    const [recipe, setRecipe] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //const recipeFields = recipeReceived.recipe;

    const changeHandler = (event) => {

        event.preventDefault()
        setRecipe((previousData) => ({
            ...previousData,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add
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
                    <form>
                        <div>
                            <label>Heading...</label>
                            <br />
                            <input type='text' name="heading" placeholder="Heading" onChange={changeHandler}/>
                            <br />
                            <label>Rating...</label>
                            <br />
                            <input type='text' name="rating" placeholder="Rating" onChange={changeHandler}/>
                            <br />
                            <label>description...</label>
                            <br />
                            <input type='text' name="description" placeholder="Description" onChange={changeHandler}/>
                            <br />
                            <label>preparationTimeMinutes...</label>
                            <br />
                            <input type='text' name="preparationTimeMinutes" placeholder="Preparation time (minutes)" onChange={changeHandler}/>
                            <br />
                            <label>cookingTimeMinutes...</label>
                            <br />
                            <input type='text' name="cookingTimeMinutes" placeholder="Cooking time (minutes)" onChange={changeHandler}/>
                            <br />
                            <label>serves...</label>
                            <br />
                            <input type='text' name="serves" placeholder="Serves" onChange={changeHandler}/>
                            <br />
                            <label>difficulty...</label>
                            <br />
                            <input type='text' name="difficulty" placeholder="Difficulty" onChange={changeHandler}/>
                            <br />
                            <label>ingredients...</label>
                            <br />
                            <input type='text' name="ingredients" placeholder="Ingredients" onChange={changeHandler}/>
                            <br />
                            <label>method...</label>
                            <br />
                            <input type='text' name="method" placeholder="Method" onChange={changeHandler}/>

                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    {/*<Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                    */}

                    <AddNewRecipe recipe={recipe}/>
                </Modal.Footer>

            </Modal>

        </>
    );
};

export default AddNewRecipeModal