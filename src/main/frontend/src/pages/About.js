import React, { useState, useEffect } from "react";

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const About = () => {

    return (
        <div>
            <Container className="mt-5">
                <h1 className="display-5 fw-bold lh-1 mb-3">About us</h1>
                <Row className="mt-5">
                    <Col md={6}>
                        <div className="d-flex h-100 flex-column">
                            <div className="card mb-3 flex-grow-1">
                                <h5 className="card-title mt-3">The creator</h5>
                                <p className="card-text">
                                    Meet the mastermind behind our innovative recipe-sharing platform, R. Gomes. As a skilled Software Developer/Engineer
                                </p>
                                <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text">
                                        R. Gomes brings a unique blend of academic knowledge and practical experience to the forefront. With confidence in IT software, systems, and principles, R. Gomes showcases exceptional technical problem-solving abilities in the dynamic IT sector. Passionate about continuous skill development, R. Gomes has crafted this web application with dedication, and a commitment to pushing culinary technology boundaries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex h-100 flex-column">
                            <div className="card mb-3 flex-grow-1">
                                <h5 className="card-title mt-3">The creature</h5>
                                <p className="card-text">
                                    Enter our dynamic culinary hub! Our web application is your top destination for sharing and discovering mouthwatering recipes.
                                </p>
                                <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text">
                                        Explore a culinary haven, whether you're a seasoned chef or kitchen novice. Our platform connects food enthusiasts, fostering collaboration to showcase dishes, exchange tips, and savor a world of flavors. Join in celebrating the joy of cooking, creating lasting connections through a love of food. Share, savor, and inspire with our recipe-sharing web app!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;