import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit() {}
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
