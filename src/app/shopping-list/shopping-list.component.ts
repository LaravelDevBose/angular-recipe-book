import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('tomato', 100),
    new Ingredient('Onion', 100),
    new Ingredient('Apple', 100),
  ];
  constructor() { }

  ngOnInit() {
  }

}
