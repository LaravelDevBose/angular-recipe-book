import {Recipe} from '../models/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../models/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subject} from 'rxjs';
@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a Test Recipe',
      'https://pinchofyum.com/wp-content/uploads/Buffalo-Cauliflower-Tacos-with-Avocado-Crema-Recipe.jpg',
      true,
      [
        new Ingredient('Meat', 1),
        new Ingredient('Rice', 10),
      ]),
    new Recipe(
      'Test Recipe',
      'This is a Test Recipe',
      'https://pinchofyum.com/wp-content/uploads/Buffalo-Cauliflower-Tacos-with-Avocado-Crema-Recipe.jpg',
      true,
      [
        new Ingredient('Apple', 51),
        new Ingredient('Bread', 10),
      ]),
    new Recipe(
      'Another Recipe',
      'This is a Another Recipe',
      'https://pinchofyum.com/wp-content/uploads/Buffalo-Cauliflower-Tacos-with-Avocado-Crema-Recipe.jpg',
      true,
      [
        new Ingredient('France Rices', 20),
        new Ingredient('Fish', 10),
      ])
  ];
  constructor(
    private sLService: ShoppingListService
  ) {
  }
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.sLService.addIngredients(ingredient);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
