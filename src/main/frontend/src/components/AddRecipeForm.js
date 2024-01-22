import React, {useState, useEffect} from "react";
import axios from "axios";

const AddRecipeForm = () => {

    const [recipes, setRecipes] = useState([]);
    const [id, setId] = useState('');
    const [heading, setHeading] = useState('');
    const [rating, setRating] = useState('');



    const submitRecipe = (event) => {
        event.preventDefault()
        //console.log(recipes[0] + "111dadadada")
        //console.log(recipes + "222dadadada")
        console.log(recipes.id + "  " + recipes.heading + "  " + recipes.rating + "<<<<3dadadada")
        axios.post("http://localhost:8080/api/v1/recipe", recipes).then(res => {
            console.log(res + "2-------------");
            //const data = res.data;
            //setRecipes(res.data);
        }).catch(res => {
            console.log(res + "pppppppppppp" + res.data)
        })

        window.location.reload(false);
        //const recipe = recipes;
        //const body = {id, heading, rating};

        /*for (var i = 0; i < recipe.length; i++) {
          console.log(recipe[i].id + "blabla" + recipe[i]);
        }*/

        /*console.log(recipe.id + "ioioioi")
        console.log(id + "ioioioi")
        console.log(heading + "ioioioi")
        console.log(rating + "ioioioi")
        console.log(body + "ioioioi")*/




        /*
        console.log(recipes.id + "1-------------" + setRecipes);
        //console.log("------------->[" + [recipes, setRecipes] + "]<-------------");
        axios.post("http://localhost:8080/api/v1/recipe").then(res => {
            console.log(res + "2-------------");
            //const data = res.data;
            setRecipes(res.data);
        }).catch(res => {
            console.log(res + "pppppppppppp" + res.data)
        })*/
    }

/*
    const changeHandler = (event) => {
        event.preventDefault()
        console.log(event.id + "xxxxxx" + setRecipes)
        //setRecipes({
            //[event.target.id]: event.target.value
        //})
        console.log(event.target.nname + "llllll" + setRecipes)
    }
*/
    /*
    handleSubmit = (event) => {
            event.preventDefault()
            console.log(this.state)
            axios.post('https://jsonplaceholder.typicode.com/posts', this.state).then(res => {
                console.log(res)
            }).catch(res => {
              console.log(res)
          })
        }
    */

    /*useEffect(() => {
      console.log(setRecipes.heading + "TESTTTTTTTTTTTT>" + recipes.id);
      //submitRecipe();
    }, []);*/

/*

    return recipes.map((recipe, index, id) => {

        return (
          <div key = {index}>
              <p>{recipe.heading}</p>
              <p>{recipe.rating}</p>
          </div>
        )
    })
*/



    const changeHandler = (event) => {
        event.preventDefault()
        //recipes.heading="DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD"
        console.log(event + "   " + event.target + "   " + event.target.name + "   " + event.target.value + "tttttttttttt");
        setRecipes((previousData) => ({
            ...previousData,
            [event.target.name]: event.target.value,
            //recipes.heading="a",
        }));
    }


        return (
            <div>
                <form onSubmit={submitRecipe}>
                    <div>
                        <label>Id</label>
                        <input type='text' name="id" value={recipes.id || ''} onChange={changeHandler}/>
                    </div>
                    <div>
                        <label>Heading</label>
                        <input type='text' name="heading" value={recipes.heading || ''} onChange={changeHandler}/>
                    </div>
                    <div>
                        <label>Rating</label>
                        <input type='text' name="rating" value={recipes.rating || ''} onChange={changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )


    /*return ((recipe, index, id) => {

        return (
          <div>
              <p>aabaaaaaaaaaa</p>
              <p>bbbbbbbbbbbbb</p>
          </div>
        )
    })*/

    //render(){

    //const [recipes, setRecipes] = useState([]);
    //return recipes.map((recipe) => {
/*
        return (
          <div key = {index}>
              <p>{recipe.heading}</p>
              <p>{recipe.rating}</p>
          </div>
        )*/
        /*return (
          <form onSubmit={submitRecipe}>
              <div>
                  <label>ID</label>
                  <input type='text' name="id" value={recipe.id}/>
              </div>
              <div>
                  <label>Heading</label>
                  <input type='text' name="heading" value={recipe.heading}/>
              </div>
              <div>
                  <label>Rating</label>
                  <input type='text' name="rating" value={recipe.rating}/>
              </div>
              <button type="submit">Submit</button>
          </form>
        )*/
    //})
   // }
};

export default AddRecipeForm