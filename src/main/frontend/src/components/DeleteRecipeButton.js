import React, {useState, useEffect} from "react";
import axios from "axios";


const DeleteRecipeButton = ( {recipeId, persistentData, setPersistentData} ) => {

    //const [recipes, setRecipes] = useState([]);

    const deleteRecipe = (event) => {

        const token = "Bearer " + persistentData;

        const headers = {
          'Authorization': token
        };

        const urlHost = window.location.origin;
        const url = urlHost + "/api/v1/recipe"
        const parameter = "/" + recipeId.id

        axios.delete(url + parameter, {}, {headers: headers}).then(response => {
            console.log("Item deleted");
        }).catch(response => {
            console.log(response + " Error: " + response.data);
        })

        window.location.reload(false);
    }

    return (
        <div>
            <button type="button" onClick={() => deleteRecipe()}>Delete</button>
        </div>
    )
};

const mapStateToProps = (state) => ({
    persistentData: state.persistentData,
});

const mapDispatchToProps = (dispatch) => ({
    setPersistentData: (data) => dispatch({ type: 'SET_PERSISTENT_DATA', payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteRecipeButton);
//export default DeleteRecipeButton