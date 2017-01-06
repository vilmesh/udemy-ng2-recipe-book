import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from './ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Tofu', 'Very tasty', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS__GQQ6i5Yk_brZ27uz9LT8kwvzwZVeD-9I3DatpH-tGLabpE0FQ', [
      new Ingredient('Soy Milk', 4)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://cookdiary.net/wp-content/uploads/images/Summer-Salad_17786.jpg', [
      new Ingredient('Green', 40), new Ingredient('Potato', 6), new Ingredient('Bean', 10)
    ])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
