import React, { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AddNewRecipeModal from '../components/AddNewRecipeModal';
import GetRecipes from '../hooks/GetRecipes';

const Recipes = () => {
 //style={{ textAlign: 'justify' }}
    return (
        <div>
            <AddNewRecipeModal />

            <div className="px-4 pt-5 text-center">
                <h1 class="display-5 fw-bold lh-1 mb-3">All recipes</h1>
                <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
                    <div className="container px-5">
                        <img src="https://media.istockphoto.com/id/1403973419/photo/table-top-of-food-spread-on-table.jpg?s=612x612&w=0&k=20&c=2cROUMurZUtuvqF-bp8lViZ0wDXBNkZBcIjQj2QQlec=" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
                    </div>
                </div>
                <div className="col-lg-6 mx-auto mt-5">
                    <p className="lead mb-4">Explore a world of flavors! Browse through our diverse collection of recipes and discover culinary delights from around the globe. Your next favorite dish is just a click away – start exploring now!</p>
                </div>
            </div>

            {/*
            <Container className="mt-5">
                <Row className='row-cols-1 row-cols-md-2 row-cols-lg-auto g-5'>
                    <h1>All recipes</h1>
                    <p style={{ textAlign: 'left' }}>Explore a world of flavors! Browse through our diverse collection of recipes and discover culinary delights from around the globe. Your next favorite dish is just a click away – start exploring now!</p>
                </Row>
            </Container>
            */}

            <Container className="mt-5">
                <Row className='row-cols-1 row-cols-md-2 row-cols-lg-auto g-5'>
                    <GetRecipes />
                </Row>
            </Container>
        </div>
    )
}

export default Recipes;