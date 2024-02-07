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
                    <Col md={12}>
                        <div className="d-flex flex-column">
                            <div className="card mb-3 flex-grow-1" style={{ textAlign: 'justify' }}>
                                <img className="card-img-top" src={recipe.imageUrlPath} alt="Card image cap" height="500"/>

                                <Row className="mx-4 mt-2">
                                    <Col md={4}>
                                        <p>Rating:
                                            {
                                                recipe.rating == 1 ? (
                                                    <>
                                                        <img src="https://static.wixstatic.com/media/215d27_87b0e8f168d44a45a0cdb29593725f83~mv2.png" className="mx-1" className="mx-2" width="15" height="15"/>
                                                    </>)
                                                : (recipe.rating == 2 ? (
                                                    <>
                                                        <img src="https://static.wixstatic.com/media/215d27_87b0e8f168d44a45a0cdb29593725f83~mv2.png" className="mx-1" width="15" height="15"/>
                                                        <img src="https://static.wixstatic.com/media/215d27_87b0e8f168d44a45a0cdb29593725f83~mv2.png" className="mx-1" width="15" height="15"/>
                                                    </>)
                                                : (recipe.rating == 3 ? (
                                                    <>
                                                        <img src="https://static.wixstatic.com/media/215d27_87b0e8f168d44a45a0cdb29593725f83~mv2.png" className="mx-1" width="15" height="15"/>
                                                        <img src="https://static.wixstatic.com/media/215d27_87b0e8f168d44a45a0cdb29593725f83~mv2.png" className="mx-1" width="15" height="15"/>
                                                        <img src="https://static.wixstatic.com/media/215d27_87b0e8f168d44a45a0cdb29593725f83~mv2.png" className="mx-1" width="15" height="15"/>
                                                    </>)
                                                : (recipe.rating == 4 ? (
                                                    <>
                                                        <img src="https://static.wixstatic.com/media/215d27_87b0e8f168d44a45a0cdb29593725f83~mv2.png" className="mx-1" width="15" height="15"/>
                                                        <img src="https://static.wixstatic.com/media/215d27_87b0e8f168d44a45a0cdb29593725f83~mv2.png" className="mx-1" width="15" height="15"/>
                                                        <img src="https://static.wixstatic.com/media/215d27_87b0e8f168d44a45a0cdb29593725f83~mv2.png" className="mx-1" width="15" height="15"/>
                                                        <img src="https://static.wixstatic.com/media/215d27_87b0e8f168d44a45a0cdb29593725f83~mv2.png" className="mx-1" width="15" height="15"/>
                                                    </>)
                                                : (
                                                    <>
                                                        <img src="https://static.wixstatic.com/media/215d27_87b0e8f168d44a45a0cdb29593725f83~mv2.png" className="mx-1" width="15" height="15"/>
                                                        <img src="https://static.wixstatic.com/media/215d27_87b0e8f168d44a45a0cdb29593725f83~mv2.png" className="mx-1" width="15" height="15"/>
                                                        <img src="https://static.wixstatic.com/media/215d27_87b0e8f168d44a45a0cdb29593725f83~mv2.png" className="mx-1" width="15" height="15"/>
                                                        <img src="https://static.wixstatic.com/media/215d27_87b0e8f168d44a45a0cdb29593725f83~mv2.png" className="mx-1" width="15" height="15"/>
                                                        <img src="https://static.wixstatic.com/media/215d27_87b0e8f168d44a45a0cdb29593725f83~mv2.png" className="mx-1" width="15" height="15"/>
                                                    </>
                                                ))))
                                            }
                                        </p>
                                    </Col>
                                    <Col md={4}>
                                        <p>Difficulty:
                                            {
                                                recipe.difficulty == 1 ? (
                                                    <>
                                                        {' '}Easy
                                                    </>)
                                                : (recipe.difficulty == 2 ? (
                                                    <>
                                                        {' '}Medium
                                                    </>)
                                                : (recipe.difficulty == 3 ? (
                                                    <>
                                                        {' '}Hard
                                                    </>)
                                                : (
                                                    <>
                                                        {' '}Undefined
                                                    </>
                                                )))
                                            }
                                        </p>
                                    </Col>
                                    <Col md={4}>
                                        <p>Serves: {recipe.serves} people</p>
                                    </Col>
                                </Row>

                                <Row className="mx-4">
                                    <Col md={4}>
                                        <p>Preparation time: {recipe.preparationTimeMinutes} minutes</p>
                                    </Col>
                                    <Col md={4}>
                                        <p>Cooking time: {recipe.cookingTimeMinutes} minutes</p>
                                    </Col>
                                </Row>
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
};

export default RecipeContent