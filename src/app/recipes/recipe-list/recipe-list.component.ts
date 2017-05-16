import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Quiche de jamón y queso', 
      'Las quiches son una receta ideal para niños: los ingredientes son fáciles de conseguir, su preparación es muy sencilla y están listas en poco tiempo.', 
      'https://static.guiainfantil.com/pictures/recetas/4378-4-quiche-de-jamon-y-queso-receta-rapida-y-sencilla.jpg')
  ];

  constructor() { }
  ngOnInit() {}

  onRecipeItemListSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
