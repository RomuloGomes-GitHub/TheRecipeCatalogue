import React, { useState, useEffect } from "react";

import { useLocation } from 'react-router-dom'

import GetRecipe from '../hooks/GetRecipe';
import AddNewRecipe from '../hooks/AddNewRecipe';


const Recipe = (props) => {

    return (
        <div>
            <GetRecipe />
        </div>
    )
}

export default Recipe;