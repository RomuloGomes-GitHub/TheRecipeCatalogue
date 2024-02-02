import React, {useState, useEffect} from "react";
import axios from "axios";
import DeleteRecipeButton from './DeleteRecipeButton'

const ReturnRecipes = ({ persistentData, setPersistentData }) => {

    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = () => {

        const token = "Bearer " + persistentData;

        const headers = {
          'Authorization': token
        };

        const url = "http://localhost:8080/api/v1/recipe"
        //const parameter = "/" + recipeId.id

        axios.get(url, {headers: headers}).then(response => {
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
                <UpdateRecipeForm id={recipe.id} />
                <hr />
            </div>
        )
    })
};

const mapStateToProps = (state) => ({
    persistentData: state.persistentData,
});

const mapDispatchToProps = (dispatch) => ({
    setPersistentData: (data) => dispatch({ type: 'SET_PERSISTENT_DATA', payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReturnRecipes);
//export default ReturnRecipes