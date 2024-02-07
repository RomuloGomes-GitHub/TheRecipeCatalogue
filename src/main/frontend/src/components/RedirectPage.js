import React, { useState, useEffect } from "react";

import { useLocation, useNavigate } from 'react-router-dom';


const RedirectPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const { param } = location.state;


    useEffect(() => {
        if(param != null && param != ""){
            navigate(param);
        }
    }, []);

    return (
        <div>
            <h2>Redirecting...</h2>
        </div>
    )
}

export default RedirectPage;