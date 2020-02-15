import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../models/recipe.model';
import {RecipeService} from '../../services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
          this.id = +params.id;
          this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }
  onAddToShoppingList() {
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
