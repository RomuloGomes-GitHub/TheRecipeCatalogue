import React, {useState, useEffect } from "react";
import axios from "axios";

import { Link, useLocation } from "react-router-dom";

import Container from 'react-bootstrap/Container';

const UpdateRecipe = (fieldsReceived) =>  {

    const submitRecipe = (event) => {

        const recipeId = fieldsReceived.updateFields.id;
        const recipeFields = fieldsReceived.updateFields.recipeFields;
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

            axios.put(url + parameter).then(response => {
                console.log("Item updated");
            }).catch(response => {
                console.log(response + "Error: " + response.data);
            })

            window.location.reload(false);
        };
    }

    return (
        <>
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={() => submitRecipe()} >Submit</button>
        </>
    );

};

export default UpdateRecipe