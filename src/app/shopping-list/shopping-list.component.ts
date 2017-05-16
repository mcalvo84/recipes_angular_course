import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Paquete de masa brisa', 1),
    new Ingredient('Huevos', 4),
    new Ingredient('nata', 200),
    new Ingredient('Jamón cocido', 200),
    new Ingredient('Queso', 175),
    new Ingredient('Mantequilla', 0),
    new Ingredient('Pimienta blanca', 0),
    new Ingredient('Perejil', 0),
    new Ingredient('Sal', 0)
  ];

  constructor() { }

  ngOnInit() {
  }

}
