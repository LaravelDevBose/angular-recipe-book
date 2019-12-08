import {Ingredient} from '../models/ingredient.model';


export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('tomato', 100),
    new Ingredient('Onion', 100),
    new Ingredient('Apple', 100),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
