import React, {useState, useEffect } from "react";
import { connect } from 'react-redux';
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const UpdateRecipe = ({updateFields, errors, persistentData, setPersistentData }) =>  {

    const navigate = useNavigate();
    const [reRender, setReRender] = useState("");
    const [formChecked, setFormChecked] = useState(true);

    const submitRecipe = (event) => {

        let submitForm = true;

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

            const token = "Bearer " + persistentData;

            const headers = {
              'Authorization': token
            };

            const recipeId = updateFields.id;
            const recipeFields = updateFields.recipeFields;
            const urlHost = window.location.origin;
            const url = urlHost + "/api/v1/recipes/recipe";
            let redirectParameter = recipeId;
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
                navigate("/redirect", {state: {param: "/recipes/recipe/" + redirectParameter}});
                //navigate("/redirect", {state: {param: "/recipes"}});
            };
        }
    }

    console.log(updateFields)

    return (
        <>
            {/*
            <Button variant="outline-success" onClick={() => submitRecipe()} className="btn btn-dark btn-lg px-4 mx-2">
                Update recipe
            </Button>
            */
            }

            {
                (formChecked ? (
                    <>
                        <Button variant="outline-success" onClick={() => submitRecipe()} className="btn btn-dark btn-lg px-4 mx-2">Update Recipe</Button>
                    </>
                ) : (
                    <>
                        <Alert variant='danger'>Fix the data and leave no empty fields.</Alert>
                        <Button variant="outline-success" onClick={() => submitRecipe()} className="btn btn-dark btn-lg px-4 mx-2">Update Recipe</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRecipe);
//export default UpdateRecipe