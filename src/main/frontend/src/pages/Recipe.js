import React, { useState, useEffect } from "react";

import { useLocation } from 'react-router-dom'

import GetRecipe from '../hooks/GetRecipe';


const Recipe = (props) => {

    return (
        <div>
            <GetRecipe />
        </div>
    )
}

export default Recipe;