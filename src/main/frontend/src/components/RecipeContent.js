import React, {useState, useEffect } from "react";
import axios from "axios";

import { Link, useLocation } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import DeleteRecipeButton from './DeleteRecipeButton'
//import UpdateRecipeForm from './UpdateRecipeForm'
import GetRecipe from '../hooks/GetRecipe';
import UpdateRecipe from '../hooks/UpdateRecipe';
import DeleteRecipe from '../hooks/DeleteRecipe';

import UpdateRecipeModal from './UpdateRecipeModal';

const RecipeContent = (recipeReceived) => {

    const recipe = recipeReceived.recipe;

    return (
        <div>
            <Container bg="dark" data-bs-theme="dark" className="bg-body-primary mt-5">
                <h1 className="display-5 fw-bold lh-1 mb-3">{recipe.heading}</h1>
                <Row className="mt-5">

                    <Col md={6}>
                        <div className="d-flex h-100 flex-column">
                            <div className="card mb-3 flex-grow-1">
                                <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg" alt="Card image cap" />

                            </div>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="d-flex h-100 flex-column">
                            <div className="card mb-3 flex-grow-1">
                                <Card>
                                    <Card.Header>Preparation time</Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {' '}
                                                {recipe.preparationTimeMinutes} minutes{' '}
                                            </p>
                                        </blockquote>
                                    </Card.Body>

                                    <Card.Header>Cooking Time</Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {' '}
                                                {recipe.cookingTimeMinutes} minutes{' '}
                                            </p>
                                        </blockquote>
                                    </Card.Body>

                                    <Card.Header>Serves</Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {' '}
                                                {recipe.serves}{' '}
                                            </p>
                                        </blockquote>
                                    </Card.Body>

                                    <Card.Header>Difficulty</Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {' '}
                                                {recipe.difficulty}{' '}
                                            </p>
                                        </blockquote>
                                    </Card.Body>

                                    <Card.Header>Rating</Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {' '}
                                                {recipe.rating}{' '}
                                            </p>
                                        </blockquote>
                                    </Card.Body>

                                </Card>
                            </div>
                        </div>

                    </Col>
                </Row>


                <Row className="mt-4">
                    <Col md={12}>
                        <div className="d-flex flex-column mt-2">
                            <div>
                                <Card>
                                    <Card.Header>Description</Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {' '}
                                                {recipe.description}{' '}
                                            </p>
                                        </blockquote>
                                    </Card.Body>
                                </Card>

                            </div>
                        </div>
                        <div className="d-flex flex-column mt-4">
                            <div>
                                <Card>
                                    <Card.Header>Ingredients</Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {' '}
                                                {recipe.ingredients}{' '}
                                            </p>
                                        </blockquote>
                                    </Card.Body>
                                </Card>

                            </div>
                        </div>
                        <div className="d-flex flex-column mt-4">
                            <div>
                                <Card>
                                    <Card.Header>Method</Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {' '}
                                                {recipe.method}{' '}
                                            </p>
                                        </blockquote>
                                    </Card.Body>
                                </Card>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
/*
    return recipes.map((recipe, index, id) => {
            return (

                <>
                    <p>kkkk</p>
                    <p>{recipes.recipe}</p>
                    <p>{recipes.heading}</p>
                    <p>kkkk</p>
                </>

            )
        })
*/



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

export default RecipeContent