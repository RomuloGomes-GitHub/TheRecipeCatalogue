import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { Link } from "react-router-dom";

const HeroHomePage = () => {

    return (
        <Container fluid fluid bg="light" data-bs-theme="light" className="bg-body-secondary">
            <div class="container col-xxl-8 px-4 py-5 ">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div>

                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3" style={{ textAlign: 'left' }}>Recipes waiting for you</h1>
                        <p class="lead" style={{ textAlign: 'justify' }}>Share your culinary flair and favorite recipes with our vibrant community. Whether you are a chef or a kitchen adventurer, every dish is a story. Join us in celebrating the joy of cooking, where everyone is a hero!</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link to={"/recipes"}>
                                <button type="button" className="btn btn-dark btn-lg px-4 me-md-2">Recipes</button>
                            </Link>
                            {/*<button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>*/}
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default HeroHomePage;