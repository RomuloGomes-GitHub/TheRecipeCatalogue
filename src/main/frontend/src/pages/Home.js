import React, { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';

import HeroHomePage from '../components/HeroHomePage';
import GetRecipesTop3Rating from '../hooks/GetRecipesTop3Rating';
import GetRecipesLatest3 from '../hooks/GetRecipesLatest3';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

    return (
        <div>
            <HeroHomePage />

            <Container className="mt-5">
                <Row className='row-cols-1 row-cols-md-2 row-cols-lg-auto g-5'>
                    <h1>Top recipes</h1>
                </Row>
            </Container>

            <Container>
                <Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 g-5'>
                    <GetRecipesTop3Rating />
                </Row>
            </Container>

            <Container className="mt-5">
                <Row className='row-cols-1 row-cols-md-2 row-cols-lg-auto g-5'>
                    <h1>Latest recipes</h1>
                </Row>
            </Container>

            <Container>
                <Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 g-5'>
                    <GetRecipesLatest3 />
                </Row>
            </Container>

        </div>
    )
}

export default Home;