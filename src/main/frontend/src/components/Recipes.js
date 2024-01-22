import React, {useState, useEffect} from "react";
import axios from "axios";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = () => {
        axios.get("http://localhost:8080/api/v1/recipe").then(res => {
            console.log(res);
            const data = res.data;
            setRecipes(res.data);
        })
    }

    useEffect(() => {
      fetchRecipes();
    }, []);

    return recipes.map((recipe, index, id) => {

        return (
          <div key = {index}>
              <p>{recipe.heading}</p>
              <p>{recipe.rating}</p>
          </div>
        )
    })
};


export default Recipes