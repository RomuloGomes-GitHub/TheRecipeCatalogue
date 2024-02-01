import React, {useState, useEffect} from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';

const deleteRecipe = (recipeId) => {

    //const [recipes, setRecipes] = useState([]);

    const removeRecipe = (event) => {

        //event.preventDefault();
        const url = "http://localhost:8080/api/v1/recipes/recipe"
        const parameter = "/" + recipeId.id;

        axios.delete(url + parameter).then(response => {
            console.log("Item delete");
        }).catch(response => {
            console.log(response + "Error: " + response.data);
        })

        window.location.replace('../../recipes');
    }

    return (
        <div>
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={() => removeRecipe()}>Delete</button>
        </div>
    )

};

export default deleteRecipe