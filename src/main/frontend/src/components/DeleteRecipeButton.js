import React, {useState, useEffect} from "react";
import axios from "axios";


const DeleteRecipeButton = (recipeId) => {

    //const [recipes, setRecipes] = useState([]);

    const deleteRecipe = (event) => {

        //event.preventDefault();
        const url = "http://localhost:8080/api/v1/recipe"
        const parameter = "/" + recipeId.id

        axios.delete(url + parameter).then(response => {
            console.log("Item delete");
        }).catch(response => {
            console.log(response + "Error: " + response.data);
        })

        window.location.reload(false);
    }

    return (
        <div>
            <button type="button" onClick={() => deleteRecipe()}>Delete</button>
        </div>
    )
};

export default DeleteRecipeButton