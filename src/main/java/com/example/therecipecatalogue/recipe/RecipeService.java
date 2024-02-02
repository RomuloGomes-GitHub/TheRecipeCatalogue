package com.example.therecipecatalogue.recipe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {

    private RecipeRepository recipeRepository;

    @Autowired
    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public List<Recipe> getRecipes(){
        return recipeRepository.findAll();
    }

    public List<Recipe> getRecipesTop3Rating(){
        return recipeRepository.findTop3ByOrderByRatingDesc();
    }

    public List<Recipe> getRecipesLatest3(){
        return recipeRepository.findTop3ByOrderByIdDesc();
    }

    public Optional<Recipe> findRecipeById(Long id){
        return recipeRepository.findById(id);
    }

    public void addNewRecipe(Recipe recipe) {
        recipeRepository.save(recipe);
    }

    public void deleteRecipe(Long id){
        recipeRepository.deleteById(id);
    }

    @Transactional
    public void updateRecipe(Long id, String heading, int rating, String description, int preparationTimeMinutes, int cookingTimeMinutes, int serves, int difficulty, String ingredients, String method) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow(() -> new IllegalStateException("Recipe with Id " + id + " does not exist"));

        if(heading != null && heading.length() > 0){
            recipe.setHeading(heading);
        }

        if(rating > 0){
            recipe.setRating(rating);
        }

        if(description != null && description.length() > 0){
            recipe.setDescription(description);
        }

        if(preparationTimeMinutes > 0){
            recipe.setPreparationTimeMinutes(preparationTimeMinutes);
        }

        if(cookingTimeMinutes > 0){
            recipe.setCookingTimeMinutes(cookingTimeMinutes);
        }

        if(serves > 0){
            recipe.setServes(serves);
        }

        if(difficulty > 0){
            recipe.setDifficulty(difficulty);
        }

        if(ingredients != null && ingredients.length() > 0){
            recipe.setIngredients(ingredients);
        }

        if(method != null && method.length() > 0){
            recipe.setMethod(method);
        }
    }
}
