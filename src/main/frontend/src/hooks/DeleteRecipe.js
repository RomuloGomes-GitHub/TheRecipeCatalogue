import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const DeleteRecipe = ({recipeId, persistentData, setPersistentData}) => {

    const navigate = useNavigate();

    const removeRecipe = (event) => {

        const token = "Bearer " + persistentData;

        const headers = {
          'Authorization': token
        };

        //event.preventDefault();

        const urlHost = window.location.origin;
        const url = urlHost + "/api/v1/recipes/recipe"
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
            <Button variant="outline-danger" onClick={() => removeRecipe()} className="btn btn-dark btn-lg px-4 mx-2">
                Delete recipe
            </Button>
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