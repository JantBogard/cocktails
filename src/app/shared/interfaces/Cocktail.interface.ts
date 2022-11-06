import { Ingredient } from './Ingredient.interface';
export interface Cocktail {
  name: string;
  img: string;
  description: string;
  ingredients: Ingredient[];
}
