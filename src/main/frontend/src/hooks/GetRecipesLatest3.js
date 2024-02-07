import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import axios from "axios";

import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccessDenied from '../components/AccessDenied';

const GetRecipesLatest3 = ({ persistentData, setPersistentData }) => {

    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = () => {

        const token = "Bearer " + persistentData;

        const headers = {
          'Authorization': token
        };

        const url = "http://localhost:8080/api/v1/recipes/recipes_latest_3"

        axios.get(url, {headers: headers}).then(response => {
            setRecipes(response.data);
        }).catch(response => {
            console.log(response + " Error: " + response.data);
        })
    }

    useEffect(() => {
        fetchRecipes();
    }, []);

    return recipes.map((recipe, index, id) => {
        return (
            <Col key={index} as={Link} to={"./recipes/recipe/" + recipe.id} style={{ textDecoration: 'none' }}>
                <div className="d-flex h-100 flex-column">
                    <div className="card flex-grow-1">
                        <Card.Img variant="top" src={recipe.urlImaged} height="200" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>{recipe.heading}</Card.Title>
                            <Card.Text style={{ textAlign: 'justify' }}>{recipe.description}</Card.Text>
                            <Card.Text style={{ textAlign: 'justify' }}>Rating:
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
                            </Card.Text>
                        </Card.Body>
                    </div>
                </div>
            </Col>
        )
    })

};

const mapStateToProps = (state) => ({
    persistentData: state.persistentData,
});

const mapDispatchToProps = (dispatch) => ({
    setPersistentData: (data) => dispatch({ type: 'SET_PERSISTENT_DATA', payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(GetRecipesLatest3);
//export default GetRecipes