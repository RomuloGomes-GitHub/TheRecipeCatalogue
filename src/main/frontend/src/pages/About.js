import React, { useState, useEffect } from "react";

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
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
                    <Col md={12}>
                        <div className="d-flex h-100 flex-column">
                            <div className="card mb-3 flex-grow-1">
                                <div className="card-body">
                                    <h5 className="card-title">The creator</h5>
                                    <p className="card-text"  style={{ textAlign: 'center' }}>
                                        Meet the mastermind behind our innovative recipe-sharing platform, R. Gomes. As a skilled Software Developer/Engineer
                                    </p>
                                </div>
                                <img className="card-img-top" src="https://static.wixstatic.com/media/215d27_36a3c724447a4a2d92eab91776ec3ec7~mv2.jpg" alt="Card image cap" height="750"/>
                                <div className="card-body">
                                    <p className="card-text" style={{ textAlign: 'justify' }}>
                                        R. Gomes brings a unique blend of academic knowledge and practical experience to the forefront. With confidence in IT software, systems, and principles, R. Gomes showcases exceptional technical problem-solving abilities in the dynamic IT sector. Passionate about continuous skill development, R. Gomes has crafted this web application with dedication, and a commitment to pushing culinary technology boundaries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="d-flex h-100 flex-column">
                            <div className="card mb-3 flex-grow-1">
                                <div className="card-body">
                                    <h5 className="card-title">The creature</h5>
                                    <p className="card-text" style={{ textAlign: 'center' }}>
                                        Enter our dynamic culinary hub! Our web application is your top destination for sharing and discovering mouthwatering recipes.
                                    </p>
                                </div>
                                <img className="card-img-top" src="https://www.eatingwell.com/thmb/088YHsNmHkUQ7iNGP4375MiAXOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_7866255_foods-you-should-eat-every-week-to-lose-weight_-04-d58e9c481bce4a29b47295baade4072d.jpg" alt="Card image cap" height="750" />
                                <div className="card-body">
                                    <p className="card-text" style={{ textAlign: 'justify' }}>
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