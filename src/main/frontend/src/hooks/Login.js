import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import axios from "axios";

import { Link, useLocation } from "react-router-dom";

const Login = ( {userLogin, persistentData, setPersistentData }) =>  {


    const [user, setUser] = useState([]);
    const [token, setToken] = useState([]);
    //const { persistentData, setPersistentData } = props;

    const savePersistentData = (tokenReceived) => {
        setPersistentData(tokenReceived);
    };

    const submitLogin = (event) => {

        const url = "http://localhost:8080/api/v1/auth/authenticate";
        const parameter = userLogin;

        axios.post(url, parameter).then(response => {

            savePersistentData(response.data.access_token);//
            console.log("PersistentData: " + response.data.access_token);
            //callWithToken(url, parameter, response.data.access_token);

        }).catch(response => {

            console.log(response + " Error: " + response.data);

        })

        //window.location.reload(false);
    }

    /*const callWithToken = (url, parameter, token) => {

        token = "Bearer " + token;
        console.log("tokentoken" + token);

        const headers = {
          'Authorization': token
        }

        axios.post(url, parameter, {headers: headers}).then(response => {
            console.log("Login successssss22222222222222");
            console.log("second token: " + headers);
            console.log(response.data);
            //savePersistentData(token);
            console.log("-----------response.data 1  " + response.data.access_token);
            console.log("-----------persistentData 1  " + token);
            console.log("-----------persistentData 11 " + persistentData);
            savePersistentData("'" + response.data.access_token + "'");
            savePersistentData("'" + response.data.access_token + "'");
            console.log("-----------persistentData 2  " + token);
            console.log("-----------persistentData 22 " + persistentData);
            //savePersistentData(token);
            //savePersistentData(token);
        }).catch(response => {
            console.log(response + " Error: " + response.data)
        })
    }*/
    //"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJSLiBHb21lcyIsImlhdCI6MTcwNjcwNTg2NiwiZXhwIjoxNzA2NzkyMjY2fQ.RILg9glzb_QO65-_yvWtzOmGNq3JA4bvz5nQVKZZ3G8"
    //"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJSLiBHb21lcyIsImlhdCI6MTcwNjcwNTg0OSwiZXhwIjoxNzA2NzkyMjQ5fQ.yvIKdlm0ZygXw4GEfr_QOA_uhE9-GWuONL02nKQDIvU""

    return (
        <>
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={() => submitLogin()} >Submit</button>
        </>
    );

};

const mapStateToProps = (state) => ({
  persistentData: state.persistentData,
});

const mapDispatchToProps = (dispatch) => ({
  setPersistentData: (data) => dispatch({ type: 'SET_PERSISTENT_DATA', payload: data }),
});

//export default Login;
export default connect(mapStateToProps, mapDispatchToProps) (Login);