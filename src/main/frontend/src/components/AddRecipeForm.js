import React, {useState, useEffect} from "react";
import axios from "axios";

const AddRecipeForm = () => {
/*
    const [recipes, setRecipes] = useState([]);

    const submitRecipe = (event) => {

        event.preventDefault();
        const url = "http://localhost:8080/api/v1/recipe"
        const parameter = recipes

        axios.post(url, parameter).then(response => {
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
        <div>
            <form onSubmit={submitRecipe}>
                <div>
                    <label>Id...</label>
                    <br />
                    <input type='text' name="id" value={recipes.id || ''} onChange={changeHandler}/>
                </div>
                <div>
                    <label>Heading...</label>
                    <br />
                    <input type='text' name="heading" value={recipes.heading || ''} onChange={changeHandler}/>
                </div>
                <div>
                    <label>Rating...</label>
                    <br />
                    <input type='text' name="rating" value={recipes.rating || ''} onChange={changeHandler}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
    */

    return (
        <>
            <p>aaaaaa</p>
        </>
    );
};

export default AddRecipeForm