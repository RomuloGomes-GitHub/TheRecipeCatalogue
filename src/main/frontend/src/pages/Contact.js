import React, { useState, useEffect } from "react";

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Contact = () => {

    return (

        <div>
            <Container className="mt-5">
                <h1 className="display-5 fw-bold lh-1 mb-3">Contact</h1>
                <Row className="mt-5">
                    <Col md={12}>
                        <div className="d-flex h-100 flex-column">
                            <div className="card mb-3 flex-grow-1">
                                <h5 class="card-title mt-3">Let&apos;s connect</h5>
                                <p className="card-text">
                                    Whether you have questions, feedback, or just want to say hello, feel free to drop us a message below.
                                </p>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63996.07481385563!2d-6.364560644330592!3d53.41002661080674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin!5e0!3m2!1sen!2sie!4v1706870855192!5m2!1sen!2sie"  height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="d-flex h-100 flex-column">
                            <div className="card mb-3 flex-grow-1">
                                <div className="card-body">
                                    <p className="card-text">
                                        For any inquiries or assistance, you can reach out to us at:
                                        <br />
                                        LinkedIn: <a className='text-light'href="www.linkedin.com/in/romulogomesdasilva">romulogomesdasilva</a>
                                        <br />
                                        Email: <a className='text-light'href="mailto:r.gomes90@hotmail.com">r.gomes90@hotmail.com</a>
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

export default Contact;


        /*
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
        */