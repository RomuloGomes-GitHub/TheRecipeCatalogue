import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link, useLocation } from "react-router-dom";

import Container from 'react-bootstrap/Container';

const Login = (userReceived) =>  {

    const [user, setUser] = useState([]);

    const submitLogin = (event) => {

        //const recipeId = fieldsReceived.updateFields.id;
        //const recipeFields = fieldsReceived.updateFields.recipeFields;
        //const url = "/login";
        const url = "http://localhost:8080/api/v1/auth/authenticate";
        const parameter = userReceived.userLogin;

        console.log("aa" + userReceived);
        console.log("bb" + parameter.userName);
        console.log("bb" + parameter.password);
        console.log("bb" + parameter.role);
        console.log("ddddd " + url + parameter);

        console.log("22222ppppppp" + url + parameter)

        console.log("urlurlurl " + url + parameter);
        //console.log(parameter);
        axios.post(url, parameter).then(response => {
            console.log("Login successssss");
            callWithToken(url, parameter, response.data.access_token);
        }).catch(response => {
            console.log(response + "Error: " + response.data)
        })

        //window.location.reload(false);
    }



    const callWithToken = (url, parameter, token) => {

        console.log("1111111111");
        token = "Bearer " + token
        const headers = {
          'Authorization': token
        }
        console.log("2222222222 " + token);
        console.log(headers);

        axios.post(url, parameter, {headers: headers}).then(response => {
            console.log("Login successssss22222222222222");
            console.log(response.data);

        }).catch(response => {
            console.log(response + " EError: " + response.data)
        })
    }

    return (
        <>
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={() => submitLogin()} >Submit</button>
        </>
    );

};

export default Login