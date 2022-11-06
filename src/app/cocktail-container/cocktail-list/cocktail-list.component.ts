import { Cocktail } from '../../shared/interfaces/Cocktail.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  @Input() public cocktails!: Cocktail[];

  constructor() { }

  ngOnInit(): void {
  }


}
