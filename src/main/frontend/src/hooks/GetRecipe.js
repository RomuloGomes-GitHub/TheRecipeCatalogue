import React, {useState, useEffect} from "react";
import axios from "axios";

import { Link, useLocation } from "react-router-dom";

//import DeleteRecipeButton from './DeleteRecipeButton'
//import UpdateRecipeForm from './UpdateRecipeForm'

const GetRecipe = () => {

    const [recipes, setRecipes] = useState([]);

    const location = useLocation();
    //const { pathname } = location.pathname;
    const url = location.pathname;
    const lastUrlSegment = url.split("/").pop();

    const fetchRecipe = (event) => {

        const url = "http://localhost:8080/api/v1/recipes/recipe"
        const parameter = "/" + lastUrlSegment

        axios.get(url+parameter).then(response => {
            const data = response.data;
            setRecipes(response.data);
        })
    }

    useEffect(() => {
      fetchRecipe();
    }, []);

    return (
        <div>
            <h1>heading</h1>
            <p>{recipes.heading}</p>
            <h1>rating</h1>
            <p>{recipes.rating}</p>
            <h1>description</h1>
            <p>{recipes.description}</p>
            <h1>preparationTimeMinutes</h1>
            <p>{recipes.preparationTimeMinutes}</p>
            <h1>cookingTimeMinutes</h1>
            <p>{recipes.cookingTimeMinutes}</p>
            <h1>serves</h1>
            <p>{recipes.serves}</p>
            <h1>difficulty</h1>
            <p>{recipes.difficulty}</p>
            <h1>ingredients</h1>
            <p>{recipes.ingredients}</p>
            <h1>method</h1>
            <p>{recipes.method}</p>
        </div>
    )
};

export default GetRecipe