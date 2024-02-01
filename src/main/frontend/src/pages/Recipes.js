import React, { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import CardRecipe from '../components/CardRecipe';
import AddNewRecipeModal from '../components/AddNewRecipeModal';
import LoggedIn from '../hooks/LoggedIn';
import GetRecipes from '../hooks/GetRecipes';

const Recipes = () => {

    return (
        <Container>
            <AddNewRecipeModal />
            <Row className='row-cols-1 row-cols-md-2 row-cols-lg-auto g-5'>
                <GetRecipes />
            </Row>
        </Container>
    )
}

export default Recipes;