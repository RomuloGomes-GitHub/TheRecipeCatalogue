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

        System.out.println("oooooooooooooooooook");
        Authentication username = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("1Useeeeeeeeeeeeeeeeeer: " + username);
        System.out.println("2Useeeeeeeeeeeeeeeeeer: " + username.getName());
        System.out.println("3Useeeeeeeeeeeeeeeeeer: " + username.getDetails());
        System.out.println("4Useeeeeeeeeeeeeeeeeer: " + username.getClass());

        return recipeService.getRecipes();
    }

    @GetMapping(path = "recipe/{id}")
    public Optional<Recipe> findRecipeById(@PathVariable("id") Long id){
        return recipeService.findRecipeById(id);
    }

    @PostMapping
    public void addNewRecipe(@RequestBody Recipe recipe){

        recipeService.addNewRecipe(recipe);
    }

    @DeleteMapping(path = "recipe/{id}")
    public void deleteRecipe(@PathVariable("id") Long id){
        recipeService.deleteRecipe(id);
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

        recipeService.updateRecipe(id, heading, rating, description, preparationTimeMinutes, cookingTimeMinutes, serves, difficulty, ingredients, method);
    }
}
