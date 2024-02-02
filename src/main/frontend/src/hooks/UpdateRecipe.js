import React, {useState, useEffect } from "react";
import { connect } from 'react-redux';
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';

const UpdateRecipe = ({updateFields, persistentData, setPersistentData }) =>  {

    const navigate = useNavigate();
    const [reRender, setReRender] = useState("");

    const submitRecipe = (event) => {

        const token = "Bearer " + persistentData;

        const headers = {
          'Authorization': token
        };

        const recipeId = updateFields.id;
        const recipeFields = updateFields.recipeFields;
        const url = "http://localhost:8080/api/v1/recipes/recipe";
        let parameter = "/" + recipeId + "/";

        if(Object.keys(recipeFields).length > 0){

            let recipeFieldsIndex = 0;
            parameter = parameter + "?";

            for (let key in recipeFields) {

                parameter = parameter + key + "=" + recipeFields[key];
                recipeFieldsIndex++;

                if (recipeFieldsIndex < Object.keys(recipeFields).length){
                    parameter = parameter + "&";
                }
            };

            axios.put(url + parameter, {}, {headers: headers}).then(response => {
                console.log("Item updated");
            }).catch(response => {
                console.log(response + "Error: " + response.data);
            })

            //window.location.reload(false);
            //setReRender(url + parameter);
            navigate("/recipes");
        };
    }

    return (
        <>
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={() => submitRecipe()} >Submit</button>
        </>
    );

};

const mapStateToProps = (state) => ({
    persistentData: state.persistentData,
});

const mapDispatchToProps = (dispatch) => ({
    setPersistentData: (data) => dispatch({ type: 'SET_PERSISTENT_DATA', payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRecipe);
//export default UpdateRecipe