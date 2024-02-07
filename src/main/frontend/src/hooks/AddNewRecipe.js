import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Alert from 'react-bootstrap/Alert';


const AddNewRecipe = ({recipe, errors, persistentData, setPersistentData}) =>  {

    const navigate = useNavigate();
    const [formChecked, setFormChecked] = useState(true);

    const submitRecipe = (event) => {

        let submitForm = true;

        if(!Object.keys(errors).includes("heading")){
            submitForm = false;
            setFormChecked(false);
        }

        if(!Object.keys(errors).includes("rating")){
            submitForm = false;
            setFormChecked(false);
        }

        if(!Object.keys(errors).includes("description")){
            submitForm = false;
            setFormChecked(false);
        }

        if(!Object.keys(errors).includes("preparationTimeMinutes")){
            submitForm = false;
            setFormChecked(false);
        }

        if(!Object.keys(errors).includes("cookingTimeMinutes")){
            submitForm = false;
            setFormChecked(false);
        }

        if(!Object.keys(errors).includes("serves")){
            submitForm = false;
            setFormChecked(false);
        }

        if(!Object.keys(errors).includes("difficulty")){
            submitForm = false;
            setFormChecked(false);
        }

        if(!Object.keys(errors).includes("ingredients")){
            submitForm = false;
            setFormChecked(false);
        }

        if(!Object.keys(errors).includes("method")){
            submitForm = false;
            setFormChecked(false);
        }

        if(!Object.keys(errors).includes("imageUrlPath")){
            submitForm = false;
            setFormChecked(false);
        }

        if (Object.keys(errors).length === 0) {
          submitForm = false;
          setFormChecked(false);

        } else {

            for (const error in errors) {
                if(errors[error] !== undefined){
                    if(errors[error].includes("Invalid format.")){
                        submitForm = false;
                        setFormChecked(false);
                        break;
                    }
                }
            }
        }

        if(submitForm){

            setFormChecked(true);

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

            navigate("/redirect", {state: {param: "/recipes"}});
        }
    }

    return (
        <>
            {
                (formChecked ? (
                    <>
                        <button type="button" className="btn btn-dark btn-lg px-4 mt-4" onClick={() => submitRecipe()} >Add Recipe</button>
                    </>
                ) : (
                    <>
                        <Alert variant='danger'>Fix the data and leave no empty fields.</Alert>
                        <button type="button" className="btn btn-dark btn-lg px-4 mt-4" onClick={() => submitRecipe()} >Add Recipe</button>
                    </>)
                )
            }
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