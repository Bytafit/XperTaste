import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { Recipes } from '../recipes/recipes';
import { FoodSelection} from '../foodselection/foodselection';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Recipes;
  tab3Root = FoodSelection;

  constructor() {

  }
}
