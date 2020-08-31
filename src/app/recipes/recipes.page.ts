import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.modal';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidLoad() {
    console.log('View Did load');
  }
  ionViewDidEnter() {
    console.log('View Did Enter');
  }
  ionViewWillLeave() {
    console.log('View Will leave');
  }


}
