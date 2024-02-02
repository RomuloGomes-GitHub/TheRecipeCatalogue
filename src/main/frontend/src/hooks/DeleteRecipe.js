import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';

const DeleteRecipe = ({recipeId, persistentData, setPersistentData}) => {

    const navigate = useNavigate();

    const removeRecipe = (event) => {

        const token = "Bearer " + persistentData;

        const headers = {
          'Authorization': token
        };


        //event.preventDefault();
        const url = "http://localhost:8080/api/v1/recipes/recipe"
        const parameter = "/" + recipeId;

        axios.delete(url + parameter, {headers: headers}).then(response => {
            console.log("Item deleted");
        }).catch(response => {
            console.log(response + " Error: " + response.data);
        })

        //window.location.replace('../../recipes');
        navigate('/recipes');
    }

    return (
        <div>
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={() => removeRecipe()}>Delete</button>
        </div>
    )

};

const mapStateToProps = (state) => ({
    persistentData: state.persistentData,
});

const mapDispatchToProps = (dispatch) => ({
    setPersistentData: (data) => dispatch({ type: 'SET_PERSISTENT_DATA', payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteRecipe);
//export default deleteRecipe