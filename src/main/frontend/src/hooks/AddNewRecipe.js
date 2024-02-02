import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';

const AddNewRecipe = ({recipe, persistentData, setPersistentData}) =>  {

    const navigate = useNavigate();

    const submitRecipe = (event) => {

        const token = "Bearer " + persistentData;

        const headers = {
          'Authorization': token
        };

        const url = "http://localhost:8080/api/v1/recipes";
        const parameter = recipe;

        axios.post(url, parameter, {headers: headers}).then(response => {
            console.log("Item added");
        }).catch(response => {
            console.log(response + "Error: " + response.data)
        })

        navigate('/recipes');
    }

    return (
        <>
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={() => submitRecipe()} >Add Recipe</button>
        </>
    );

};

const mapStateToProps = (state) => ({
    persistentData: state.persistentData,
});

const mapDispatchToProps = (dispatch) => ({
    setPersistentData: (data) => dispatch({ type: 'SET_PERSISTENT_DATA', payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewRecipe);
//export default AddNewRecipe