import React, {useState, useEffect } from "react";
import axios from "axios";

import { Link, useLocation } from "react-router-dom";

import Container from 'react-bootstrap/Container';
//import DeleteRecipeButton from './DeleteRecipeButton'
//import UpdateRecipeForm from './UpdateRecipeForm'
import GetRecipe from '../hooks/GetRecipe';
import UpdateRecipe from '../hooks/UpdateRecipe';
import DeleteRecipe from '../hooks/DeleteRecipe';

import UpdateRecipeForm from './UpdateRecipeForm';
import UpdateRecipeModal from './UpdateRecipeModal';

const RecipeContent = (recipeReceived) => {

    const recipe = recipeReceived.recipe;

    return (
        <div>

            <Container fluid fluid bg="light" data-bs-theme="light" className="bg-body-primary">
                <div class="container col-xxl-8 px-4 py-5">
                    <div class="row flex-lg-row align-items-center g-5 py-5">
                        <h1>{recipe.heading}</h1>
                        <UpdateRecipeModal recipe={recipe} />
                        <DeleteRecipe id={recipe.id} />
                        <div class="col-10 col-sm-8 col-lg-6">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                        </div>
                        <div class="col-lg-6">
                            <h1>Preparation time</h1>
                            <p>{recipe.preparationTimeMinutes}</p>
                            <h1>Cooking Time</h1>
                            <p>{recipe.cookingTimeMinutes}</p>
                            <h1>Serves</h1>
                            <p>{recipe.serves}</p>
                            <h1>Difficulty</h1>
                            <p>{recipe.difficulty}</p>
                            {/*<h1 class="display-5 fw-bold lh-1 mb-3">Recipes waiting for you</h1>
                            <p class="lead">Share your culinary flair and favorite recipes with our vibrant community. Whether you are a chef or a kitchen adventurer, every dish is a story. Join us in celebrating the joy of cooking, where everyone is a hero!</p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                            </div>
                            */}
                        </div>
                        <h1>Rating: {recipe.rating}</h1>
                        <h1>Description</h1>
                        <p>{recipe.description}</p>
                        <h1>Ingredients</h1>
                        <p>{recipe.ingredients}</p>
                        <h1>Method</h1>
                        <p>{recipe.method}</p>
                    </div>
                </div>
            </Container>

            {/*
                <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                      <div class="col d-flex flex-column align-items-start gap-2">
                        <h2 class="fw-bold text-body-emphasis">Left-aligned title explaining these awesome features</h2>
                        <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a href="#" class="btn btn-primary btn-lg">Primary button</a>
                      </div>

                      <div class="col">
                        <div class="row row-cols-1 row-cols-sm-2 g-4">
                          <div class="col d-flex flex-column gap-2">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                              <svg class="bi" width="1em" height="1em">
                              </svg>
                            </div>
                            <h4 class="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                            <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                          </div>

                          <div class="col d-flex flex-column gap-2">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                              <svg class="bi" width="1em" height="1em">
                              </svg>
                            </div>
                            <h4 class="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                            <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                          </div>

                          <div class="col d-flex flex-column gap-2">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                              <svg class="bi" width="1em" height="1em">
                              </svg>
                            </div>
                            <h4 class="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                            <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                          </div>

                          <div class="col d-flex flex-column gap-2">
                            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                              <svg class="bi" width="1em" height="1em">

                              </svg>
                            </div>
                            <h4 class="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                            <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                              <strong class="d-inline-block mb-2 text-primary-emphasis">World</strong>
                              <h3 class="mb-0">Featured post</h3>
                              <div class="mb-1 text-body-secondary">Nov 12</div>
                              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                              <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                                Continue reading
                                <svg class="bi"></svg>
                              </a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                              <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                            </div>
                          </div>
                        </div>

            */}


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