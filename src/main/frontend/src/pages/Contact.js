import React, { useState, useEffect } from "react";

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Contact = () => {

    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col md={6}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8011.9066880400405!2d-6.267206819759998!3d53.34407766712921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin!5e0!3m2!1sen!2sie!4v1706870559356!5m2!1sen!2sie"
                                alt="Dublin Map"
                            />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63996.07481385563!2d-6.364560644330592!3d53.41002661080674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin!5e0!3m2!1sen!2sie!4v1706870855192!5m2!1sen!2sie" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <Card.Body>
                                <Card.Title>Our Location in Dublin</Card.Title>
                                <Card.Text>
                                    We are located in the heart of Dublin. Feel free to visit us!
                                </Card.Text>
                            </Card.Body>
                            </Card>
                    </Col>
                    <Col md={6}>
                        {/* Contact Information */}
                        <Card>
                            <Card.Body>
                                <Card.Title>Contact Information</Card.Title>
                                <Card.Text>
                                    For any inquiries or assistance, you can reach out to us at:
                                    <br />
                                    Email: <a href="mailto:r.gomes90@hotmail.com">r.gomes90@hotmail.com</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;