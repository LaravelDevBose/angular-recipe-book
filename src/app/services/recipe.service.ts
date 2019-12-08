import {Recipe} from '../models/recipe.model';
import {EventEmitter} from '@angular/core';
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a Test Recipe',
      'https://pinchofyum.com/wp-content/uploads/Buffalo-Cauliflower-Tacos-with-Avocado-Crema-Recipe.jpg',
      true),
    new Recipe(
      'Test Recipe',
      'This is a Test Recipe',
      'https://pinchofyum.com/wp-content/uploads/Buffalo-Cauliflower-Tacos-with-Avocado-Crema-Recipe.jpg',
      true),
    new Recipe(
      'Another Recipe',
      'This is a Another Recipe',
      'https://pinchofyum.com/wp-content/uploads/Buffalo-Cauliflower-Tacos-with-Avocado-Crema-Recipe.jpg',
      true)
  ];

  selectedRecipe = new EventEmitter<Recipe>();
  getRecipes() {
    return this.recipes.slice();
  }
}
