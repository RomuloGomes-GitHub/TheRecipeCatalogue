import React, { useState, useEffect } from "react";

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const About = () => {

    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col md={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>About Our Web Application</Card.Title>
                                <Card.Text>
                                    Our web application is a platform where you can share your culinary flair and favorite recipes with our vibrant community. It was created by R. Gomes, a skilled Software Developer/Engineer with confidence and competence in the use of IT software, systems, and principles. R. Gomes is dedicated to demonstrating technical problem-solving ability and continuing to develop new skills. With a passion for technology, our creator aims to contribute innovative solutions to the world of software development.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;