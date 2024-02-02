import React, { useState, useEffect } from "react";

import { useLocation } from 'react-router-dom'

import SignUpForm from '../components/SignUpForm';


const SignUp = (props) => {

    return (
        <div>
            <SignUpForm />
        </div>
    )
}

export default SignUp;