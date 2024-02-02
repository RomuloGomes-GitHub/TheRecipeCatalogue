import React, { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';

import HeroHomePage from '../components/HeroHomePage';

const AccessDenied = () => {

    return (
        <div>
            <h2>Access Denied</h2>
            <p>You do not have the necessary permissions to access this page.</p>
        </div>
    )
}

export default AccessDenied;