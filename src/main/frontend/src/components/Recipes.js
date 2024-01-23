import React, {useState, useEffect} from "react";
import axios from "axios";
import DeleteRecipeButton from './DeleteRecipeButton'

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = () => {

        const url = "http://localhost:8080/api/v1/recipe"
        //const parameter = "/" + recipeId.id

        axios.get(url).then(response => {
            const data = response.data;
            setRecipes(response.data);
        })
    }

    useEffect(() => {
      fetchRecipes();
    }, []);

    return recipes.map((recipe, index, id) => {
        return (
            <div key={index}>
                <h2>Recipe: {recipe.heading}</h2>
                <p>Rating: {recipe.rating}</p>
                <DeleteRecipeButton id={recipe.id} />
                <hr />
            </div>
        )
    })
};


export default Recipes