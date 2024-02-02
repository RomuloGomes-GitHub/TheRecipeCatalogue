import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import axios from "axios";

import { Link, useLocation } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import RecipeContent from '../components/RecipeContent';

const GetRecipe = ({ persistentData, setPersistentData }) =>  {

    const [recipe, setRecipe] = useState([]);

    const location = useLocation();
    const url = location.pathname;
    const lastUrlSegment = url.split("/").pop();

    const fetchRecipe = (event) => {

        const token = "Bearer " + persistentData;

        const headers = {
          'Authorization': token
        };

        const url = "http://localhost:8080/api/v1/recipes/recipe"
        const parameter = "/" + lastUrlSegment

        axios.get(url + parameter, {headers: headers}).then(response => {
            setRecipe(response.data);
        }).catch(response => {
            console.log(response + " Error: " + response.data)
        })
    }

    useEffect(() => {
      fetchRecipe();
    }, []);

    return (
        <>
            <RecipeContent recipe={recipe} />
        </>
    )
};

const mapStateToProps = (state) => ({
    persistentData: state.persistentData,
});

const mapDispatchToProps = (dispatch) => ({
    setPersistentData: (data) => dispatch({ type: 'SET_PERSISTENT_DATA', payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(GetRecipe);
//export default GetRecipe