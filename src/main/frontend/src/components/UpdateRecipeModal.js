import React, {useState, useEffect} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import UpdateRecipe from '../hooks/UpdateRecipe';

const UpdateRecipeModal = (recipeReceived) => {

    const [recipe, setRecipe] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const recipeFields = recipeReceived.recipe;

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
                    escape key>>>>> [{recipeFields.id}]

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

                </Modal.Body>
                <Modal.Footer>
                    {/*<Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                    */}

                    <UpdateRecipe updateFields={{id: recipeFields.id, recipeFields: recipe}}/>
                </Modal.Footer>

            </Modal>

        </>
    );
};

export default UpdateRecipeModal