import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tofu', 'Very tasty', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS__GQQ6i5Yk_brZ27uz9LT8kwvzwZVeD-9I3DatpH-tGLabpE0FQ', []),
    new Recipe('Summer Salad', 'Okayish', 'http://cookdiary.net/wp-content/uploads/images/Summer-Salad_17786.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
