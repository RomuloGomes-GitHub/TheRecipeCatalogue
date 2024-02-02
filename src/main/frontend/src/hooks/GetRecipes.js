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

const GetRecipes = ({ persistentData, setPersistentData }) => {

    const [recipes, setRecipes] = useState([]);
    var userRoleCheck = document.getElementById('userRole').textContent;

    const fetchRecipes = () => {

        const token = "Bearer " + persistentData;

        const headers = {
          'Authorization': token
        };

        const url = "http://localhost:8080/api/v1/recipes"

        axios.get(url, {headers: headers}).then(response => {
            setRecipes(response.data);
        }).catch(response => {
            console.log(response + " Error: " + response.data);
        })
    }

    useEffect(() => {
        userRoleCheck = document.getElementById('userRole').textContent;
        fetchRecipes();
    }, []);

    if(userRoleCheck == "ADMIN"){
        return recipes.map((recipe, index, id) => {
            return (

                <Col key={index}>
                    <p>ssss [{userRoleCheck}] ddd</p>
                    <Card style={{ width: '22rem', cursor: "pointer", textDecoration: 'none'}} as={Link} to={"./recipe/" + recipe.id} className="m-1">
                        <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                        <Card.Body>
                            <Card.Title>{recipe.heading}</Card.Title>
                            <Card.Text>{recipe.description}</Card.Text>
                            <Card.Text>Rating: {recipe.rating}</Card.Text>
                            {
                                recipe.rating == 1 ? (
                                    <Container>
                                        <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" width="25" height="25"/>
                                    </Container>)
                                : (recipe.rating == 2 ? (
                                    <Container>
                                        <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" width="25" height="25"/>
                                        <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" width="25" height="25"/>
                                    </Container>)
                                : (recipe.rating == 3 ? (
                                    <Container>
                                        <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" width="25" height="25"/>
                                        <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" width="25" height="25"/>
                                        <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" width="25" height="25"/>
                                    </Container>)
                                : (recipe.rating == 4 ? (
                                    <Container>
                                        <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" width="25" height="25"/>
                                        <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" width="25" height="25"/>
                                        <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" width="25" height="25"/>
                                        <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" width="25" height="25"/>
                                    </Container>)
                                : (
                                    <Container>
                                        <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" width="25" height="25"/>
                                        <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" width="25" height="25"/>
                                        <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" width="25" height="25"/>
                                        <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" width="25" height="25"/>
                                        <img src="https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg" width="25" height="25"/>
                                    </Container>
                                ))))
                            }

                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    } else {
        return (
            <>
                <AccessDenied />
            </>
        )
    }

};

const mapStateToProps = (state) => ({
    persistentData: state.persistentData,
});

const mapDispatchToProps = (dispatch) => ({
    setPersistentData: (data) => dispatch({ type: 'SET_PERSISTENT_DATA', payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(GetRecipes);
//export default GetRecipes