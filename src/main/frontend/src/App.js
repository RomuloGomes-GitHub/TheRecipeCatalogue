import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

/*import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import Form from './components/Form'
import PostForm from './components/PostForm'
import Recipes from './components/Recipes'
import AddRecipeForm from './components/AddRecipeForm'*/

const TopRecipes = () => {
    return (
      <div>
          <h1>THE RECIPE CATALOGUE</h1>
      </div>
    )
};
/*
const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = () => {
        axios.get("http://localhost:8080/api/v1/recipe").then(res => {
            console.log(res);
            const data = res.data;
            setRecipes(res.data);
        })
    }

    useEffect(() => {
      fetchRecipes();
    }, []);

    return recipes.map((recipe, index, id) => {
      
        return (
          <div key = {index}>
              <p>{recipe.heading}</p>
              <p>{recipe.rating}</p>
          </div>
        )
    })
};
*/
//<Greet /> Is a function component - It's the prefered way when you want to create simple components
//<Welcome />  Is a class component - Can have maintain its own data and have more complicated logic and provide hooks - PS. There was an update and the hooks approach is the most recommended
function App() {
    return (
        <div className="App">

            <Header />
            <Body />
            <Footer />


            {/* don't delete
            <TopRecipes />

            <AddRecipeForm />

            <br />
            <br />
            <br />
            <br />

            <Recipes />
            */}




            {/* can delete
            <PostForm />

            <Form />

            <EventBind />

            <ClassClick />

            <FunctionClick />

            <Counter />

            <Message />

            <Greet name = "Bruce" favoriteMeal = "Feijoada">
                <p>Children props</p>
            </Greet>
            <Greet name = "Clark" favoriteMeal = "Pizza">
                <button>Action</button>
            </Greet>
            <Greet name = "Diana" favoriteMeal = "BBQ"/>

            <Welcome name = "Bruce" favoriteMeal = "Feijoada"/>
            <Welcome name = "Clark" favoriteMeal = "Pizza"/>
            <Welcome name = "Diana" favoriteMeal = "BBQ"/>

            <Hello />

            <TopRecipes />

            <Recipes />*/}
        </div>
    );
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React New Test
        </a>
      </header>
    </div>
  );
}
*/
export default App;
