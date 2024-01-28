import React, {useState, useEffect } from "react";
import axios from "axios";

import { Link, useLocation } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import RecipeContent from '../components/RecipeContent';

const GetRecipe = () =>  {

    const [recipe, setRecipe] = useState([]);

    const location = useLocation();
    const url = location.pathname;
    const lastUrlSegment = url.split("/").pop();

    const fetchRecipe = (event) => {

        const url = "http://localhost:8080/api/v1/recipes/recipe"
        const parameter = "/" + lastUrlSegment

        axios.get(url+parameter).then(response => {
            const data = response.data;
            setRecipe(response.data);
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

    /*return (
        <div>

            <Container fluid fluid bg="light" data-bs-theme="light" className="bg-body-secondary">
                <div class="container col-xxl-8 px-4 py-5">
                    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div class="col-10 col-sm-8 col-lg-6">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                        </div>
                        <div class="col-lg-6">
                            <h1 class="display-5 fw-bold lh-1 mb-3">Recipes waiting for you</h1>
                            <p class="lead">Share your culinary flair and favorite recipes with our vibrant community. Whether you are a chef or a kitchen adventurer, every dish is a story. Join us in celebrating the joy of cooking, where everyone is a hero!</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                            </div>
                        </div>
                    </div>
                </div>
            </ Container>

            <h1>heading</h1>
            <p>{recipes.heading}</p>
            <h1>rating</h1>
            <p>{recipes.rating}</p>
            <h1>description</h1>
            <p>{recipes.description}</p>
            <h1>preparationTimeMinutes</h1>
            <p>{recipes.preparationTimeMinutes}</p>
            <h1>cookingTimeMinutes</h1>
            <p>{recipes.cookingTimeMinutes}</p>
            <h1>serves</h1>
            <p>{recipes.serves}</p>
            <h1>difficulty</h1>
            <p>{recipes.difficulty}</p>
            <h1>ingredients</h1>
            <p>{recipes.ingredients}</p>
            <h1>method</h1>
            <p>{recipes.method}</p>
        </div>
    )*/
};

export default GetRecipe