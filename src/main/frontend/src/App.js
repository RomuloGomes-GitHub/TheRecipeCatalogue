import React, {useState, useEffect} from "react";
import { Provider } from 'react-redux';
import axios from "axios";

import { Routes, Route } from 'react-router-dom'

import Store from './store/Store';

import Header from './components/Header';
import Footer from './components/Footer';

import LoggedIn from './hooks/LoggedIn';
import Logout from './hooks/Logout';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Recipe from './pages/Recipe';
import SignIn from './pages/SignIn';

import './App.css';

//<Greet /> Is a function component - It's the prefered way when you want to create simple components
//<Welcome />  Is a class component - Can have maintain its own data and have more complicated logic and provide hooks - PS. There was an update and the hooks approach is the most recommended
function App() {
    return (

        <Provider store={Store}>
            <div data-bs-theme="dark" className="App">

                <Header />

                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/recipes" element={ <Recipes /> } />
                    <Route path="/recipes/recipe/*" element={ <Recipe /> } />
                    <Route path="/auth" element={ <SignIn /> } />
                    <Route path="/demo-controller" element={ <LoggedIn /> } />
                    <Route path="/api/v1/auth/logout" element={ <Logout /> } />
                </Routes>

                <Footer />
            </div>
        </Provider>

    );
}

export default App;

            /*
        <Provider store={Store}>
            <div data-bs-theme="dark" className="App">

                <Header />

                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/recipes" element={ <Recipes /> } />
                    <Route path="/recipes/recipe/*" element={ <Recipe /> } />
                    <Route path="/demo-controller" element={ <LoggedIn /> } />
                    <Route path="/api/v1/auth/logout" element={ <Logout /> } />
                </Routes>

                <Footer />
            </div>
        </Provider>
            */