package com.example.therecipecatalogue.recipe;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Recipe {

    @Id
    @GeneratedValue
    private Long id;
    private String heading;
    private int rating;
    private String description;
    private int preparationTimeMinutes;
    private int cookingTimeMinutes;
    private int serves;
    private int difficulty;
    private String ingredients;
    private String method;

    public Recipe() {
    }

    public Recipe(String heading, int rating, String description, int preparationTimeMinutes, int cookingTimeMinutes, int serves, int difficulty, String ingredients, String method) {
        this.heading = heading;
        this.rating = rating;
        this.description = description;
        this.preparationTimeMinutes = preparationTimeMinutes;
        this.cookingTimeMinutes = cookingTimeMinutes;
        this.serves = serves;
        this.difficulty = difficulty;
        this.ingredients = ingredients;
        this.method = method;
    }

    public Recipe(Long id, String heading, int rating, String description, int preparationTimeMinutes, int cookingTimeMinutes, int serves, int difficulty, String ingredients, String method) {
        this.id = id;
        this.heading = heading;
        this.rating = rating;
        this.description = description;
        this.preparationTimeMinutes = preparationTimeMinutes;
        this.cookingTimeMinutes = cookingTimeMinutes;
        this.serves = serves;
        this.difficulty = difficulty;
        this.ingredients = ingredients;
        this.method = method;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHeading() {
        return heading;
    }

    public void setHeading(String heading) {
        this.heading = heading;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPreparationTimeMinutes() {
        return preparationTimeMinutes;
    }

    public void setPreparationTimeMinutes(int preparationTimeMinutes) {
        this.preparationTimeMinutes = preparationTimeMinutes;
    }

    public int getCookingTimeMinutes() {
        return cookingTimeMinutes;
    }

    public void setCookingTimeMinutes(int cookingTimeMinutes) {
        this.cookingTimeMinutes = cookingTimeMinutes;
    }

    public int getServes() {
        return serves;
    }

    public void setServes(int serves) {
        this.serves = serves;
    }

    public int getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(int difficulty) {
        this.difficulty = difficulty;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    @Override
    public String toString() {
        return "Recipe{" +
                "id=" + id +
                ", heading='" + heading + '\'' +
                ", rating=" + rating +
                ", description='" + description + '\'' +
                ", preparationTimeMinutes=" + preparationTimeMinutes +
                ", cookingTimeMinutes=" + cookingTimeMinutes +
                ", serves=" + serves +
                ", difficulty=" + difficulty +
                ", ingredients='" + ingredients + '\'' +
                ", method='" + method + '\'' +
                '}';
    }
}
