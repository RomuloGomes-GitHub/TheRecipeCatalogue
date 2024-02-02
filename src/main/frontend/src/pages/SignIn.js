import React, { useState, useEffect } from "react";

import { useLocation } from 'react-router-dom'

import SignInForm from '../components/SignInForm';


const SignIn = (props) => {

    return (
        <div>
            <SignInForm />
        </div>
    )
}

export default SignIn;