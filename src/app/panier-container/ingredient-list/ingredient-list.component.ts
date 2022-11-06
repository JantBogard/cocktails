import { Ingredient } from './../../shared/interfaces/Ingredient.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {
  @Input() ingredients!: Ingredient[] | null;

  constructor() { }

  ngOnInit(): void {
  }

}
