import React, {useState, useEffect} from "react";
import { Provider } from 'react-redux';
import axios from "axios";

import { Routes, Route } from 'react-router-dom'

import Store from './store/Store';

import TopMessageBar from './components/TopMessageBar';
import Header from './components/Header';
import Footer from './components/Footer';
import AddNewRecipeBar from './components/AddNewRecipeBar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SignOut from './pages/SignOut';
import Recipes from './pages/Recipes';
import Recipe from './pages/Recipe';
import About from './pages/About';
import Contact from './pages/Contact';
import AccessDenied from './components/AccessDenied';
import RedirectPage from './components/RedirectPage';

import './App.css';

//<Greet /> Is a function component - It's the prefered way when you want to create simple components
//<Welcome />  Is a class component - Can have maintain its own data and have more complicated logic and provide hooks - PS. There was an update and the hooks approach is the most recommended
function App() {

    return (

        <Provider store={Store}>
            <div data-bs-theme="dark" className="App d-flex flex-column min-vh-100" >

                <TopMessageBar />
                <Header />

                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={ <Home /> } />

                        <Route path="/signIn" element={ <SignIn /> } />
                        <Route path="/signUp" element={ <SignUp /> } />
                        <Route path="/signOut" element={ <SignOut /> } />

                        <Route path="/recipes" element={ <Recipes /> } />
                        <Route path="/recipes/recipe/*" element={ <Recipe /> } />

                        <Route path="/about" element={ <About /> } />
                        <Route path="/contact" element={ <Contact /> } />

                        <Route path="/access-denied" element={ <AccessDenied /> } />
                        <Route path="/redirect" element={ <RedirectPage /> } />
                    </Routes>
                </main>

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