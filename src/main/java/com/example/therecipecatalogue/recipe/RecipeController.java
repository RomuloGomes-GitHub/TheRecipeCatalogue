package com.example.therecipecatalogue.recipe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/recipe")
@CrossOrigin("*") // Just use it in QA so the CORS issue goes away - Otherwise you have risk to have different hosts accessing the backend
public class RecipeController {

    private RecipeService recipeService;

    @Autowired
    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping
    public List<Recipe> getRecipes(){
        return recipeService.getRecipes();
    }

    @PostMapping
    public void addNewRecipe(@RequestBody Recipe recipe){

        recipeService.addNewRecipe(recipe);
    }

    @DeleteMapping (path = "{id}")
    public void deleteRecipe(@PathVariable("id") Long id){
        recipeService.deleteRecipe(id);
    }
}
