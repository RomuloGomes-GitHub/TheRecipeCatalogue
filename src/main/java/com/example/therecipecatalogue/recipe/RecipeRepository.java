package com.example.therecipecatalogue.recipe;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {

    Optional<Recipe> findById(Long id);

    List<Recipe> findTop3ByOrderByRatingDesc();
    List<Recipe> findTop3ByOrderByIdDesc();
}
