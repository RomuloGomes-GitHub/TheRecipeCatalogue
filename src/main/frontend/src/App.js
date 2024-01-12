import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";

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
              <h1>THE RECIPE CATALOGUE</h1>
              <p>{recipe.heading}</p>
              <p>{recipe.rating}</p>
          </div>
        )
    })
};

function App() {
  return (
    <div className="App">
      <Recipes />
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
