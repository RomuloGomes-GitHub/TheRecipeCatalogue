import React, {useState, useEffect} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const UpdateRecipeForm = (recipeId) => {

    const [recipes, setRecipes] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateRecipe = (event) => {

        event.preventDefault();
        const url = "http://localhost:8080/api/v1/recipes"
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
        console.log(event.target.name + "Error: " + event.target.value + "kkk" + recipeId.id)
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
                    escape key>>>>> [{recipeId.id}]

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