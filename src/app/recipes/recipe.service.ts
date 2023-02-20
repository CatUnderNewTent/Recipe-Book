import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../sheared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Good Stake',
      'Medium Stake',
      'https://www.simplyrecipes.com/thmb/Bp1ZU6_IWv-4vXR2qqbFqpqedDE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply_Recipes_How_To_Flank_Steak_LEAD-5-550c92292550443bbc7ec24bca9e2144.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Garlic bread', 20)]
    ),
    new Recipe(
      'Veggie Mix',
      'Bunch of Vegetables',
      'https://therecipecritic.com/wp-content/uploads/2022/09/veggiecharcuterieboard.jpg',
      [new Ingredient('Hummus', 2), new Ingredient('Dipping', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
