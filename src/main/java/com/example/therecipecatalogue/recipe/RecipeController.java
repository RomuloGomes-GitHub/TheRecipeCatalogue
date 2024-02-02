package com.example.therecipecatalogue.recipe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/recipes")
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

    @GetMapping(path = "recipes_top_3_rating")
    public List<Recipe> getRecipesTop3Rating(){

        return recipeService.getRecipesTop3Rating();
    }

    @GetMapping(path = "recipes_latest_3")
    public List<Recipe> getRecipesLatest3(){

        return recipeService.getRecipesLatest3();
    }

    @GetMapping(path = "recipe/{id}")
    public Optional<Recipe> findRecipeById(@PathVariable("id") Long id){

        Optional<Recipe> recipe = recipeService.findRecipeById(id);

        if(recipe.isPresent()){
            System.out.println("Item found");
            return recipeService.findRecipeById(id);
        } else {
            System.out.println("Item does not exist");
            return null;
        }
    }

    @PostMapping
    public void addNewRecipe(@RequestBody Recipe recipe){

        recipeService.addNewRecipe(recipe);
    }

    @DeleteMapping(path = "recipe/{id}")
    public void deleteRecipe(@PathVariable("id") Long id){

        Optional<Recipe> recipe = recipeService.findRecipeById(id);

        if(recipe.isPresent()){
            System.out.println("Item deleted");
            recipeService.deleteRecipe(id);
        } else {
            System.out.println("Item does not exist");
        }
    }

    @PutMapping(path = "recipe/{id}")
    public void updateRecipe(@PathVariable("id") Long id,
                             @RequestParam(required = false) String heading,
                             @RequestParam(required = false, defaultValue="0") int rating,
                             @RequestParam(required = false) String description,
                             @RequestParam(required = false, defaultValue="0") Integer preparationTimeMinutes,
                             @RequestParam(required = false, defaultValue="0") Integer cookingTimeMinutes,
                             @RequestParam(required = false, defaultValue="0") Integer serves,
                             @RequestParam(required = false, defaultValue="0") Integer difficulty,
                             @RequestParam(required = false) String ingredients,
                             @RequestParam(required = false) String method){


        Optional<Recipe> recipe = recipeService.findRecipeById(id);

        if(recipe.isPresent()){
            System.out.println("Item updated");
            recipeService.updateRecipe(id, heading, rating, description, preparationTimeMinutes, cookingTimeMinutes, serves, difficulty, ingredients, method);
        } else {
            System.out.println("Item does not exist");
        }
    }
}
