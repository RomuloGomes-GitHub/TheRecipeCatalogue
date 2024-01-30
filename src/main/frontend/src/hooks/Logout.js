import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Logout = () => {
    const [isLoggedIn, setLoggedIn] = useState(null);

    useEffect(() => {
        // Make an HTTP request to check login status
        axios.post('http://localhost:8080/api/v1/auth/logout').then(response => {
            console.log("LOUTLOUG");
        }).catch(response => {
            console.log(response + "Error: " + response.data)
        });
    }, []);

    return (
        <div>
            <p>aaaaaaaaaaaaaaaaaaaaa</p>
            <p>logout</p>
            <p>aaaaaaaaaaaaaaaaaaaaa</p>

        </div>
    );
};

export default Logout;