import React, { useState, useEffect } from "react";

import { useLocation } from 'react-router-dom'

import SignInForm from '../components/SignInForm';
import AddNewRecipe from '../hooks/AddNewRecipe';


const SignIn = (props) => {

    return (
        <div>
            <SignInForm />
        </div>
    )
}

export default SignIn;