import { CocktailService } from './../../shared/services/cocktail.service';
import { PanierService } from './../../shared/services/panier.service';
import { Cocktail } from '../../shared/interfaces/Cocktail.interface';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail!: Cocktail;

  constructor(private panierService: PanierService, private activatedRoute: ActivatedRoute, private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const cocktailIndex = paramMap.get('index');
      if (cocktailIndex) {
        this.cocktail = this.cocktailService.getCocktail(+cocktailIndex);
      }
    })
  }

  public addToPanier(): void {
    this.panierService.addToPanier(this.cocktail.ingredients);
  }

}
