import React, { useState, useEffect } from "react";

import { useLocation } from 'react-router-dom'

import SignOutCall from '../hooks/SignOutCall';

const SignOut = (props) => {

    return (
        <div>
            <SignOutCall />
        </div>
    )
}

export default SignOut;