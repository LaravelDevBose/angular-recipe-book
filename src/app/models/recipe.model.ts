import {Ingredient} from './ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public status?: boolean;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, status: boolean, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.status = status;
    this.ingredients = ingredients;
  }
}
