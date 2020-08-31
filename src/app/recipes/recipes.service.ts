import { Injectable } from '@angular/core';
import { Recipe } from './recipes.modal';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'rec1',
      title: 'Pizza',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      ingredients: ['Cheese', 'Corn', 'Onion']
    },
    {
      id: 'rec2',
      title: 'Pasta',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
      ingredients: ['Onion', 'Pasta Sauce', 'Tomato']
    },
    {
      id: 'rec3',
      title: 'Garlic Bread',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/tulips.png',
      ingredients: ['Garlic Butter', 'Bread']
    }
  ];


  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      }),
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
