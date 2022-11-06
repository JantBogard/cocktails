import { Subscription } from 'rxjs';
import { Ingredient } from './../shared/interfaces/Ingredient.interface';
import { PanierService } from './../shared/services/panier.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-panier-container',
  templateUrl: './panier-container.component.html',
  styleUrls: ['./panier-container.component.scss']
})
export class PanierContainerComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[] | null = null;
  public subscription: Subscription = new Subscription();

  constructor(private panierService: PanierService) { }

  ngOnInit(): void {
    this.panierService.ingredients$.subscribe((ingredients: Ingredient[] | null) => {
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
