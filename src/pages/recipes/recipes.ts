import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FoodSelection} from '../foodselection/foodselection'
import {ApplePie} from '../applepie/applepie'
import {Taco} from '../taco/taco'
import {Ravioli} from '../ravioli/ravioli'
import {HomePage} from '../home/home'

import 'rxjs/add/operator/map';
import { Http} from '@angular/http';

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class Recipes {
  public recipes;


  constructor(public navCtrl: NavController,public http : Http) {

    this.downloadRecipes();
  }

  downloadRecipes(){
    this.recipes = null;

    this.http.get('https://xpertaste.herokuapp.com/').map(res => res.json()).subscribe(data => {
      this.recipes = data;
      console.log("data retrived");
    })
  }


  getTriples() {
      console.log("getting triples")
      let triples = [];
      let length = this.recipes.length;
      for (let i = 0; i < length; i += 2) {
          let trio = [];
          trio.push(this.recipes[i]);
          if (i + 1 < length) {
              trio.push(this.recipes[i + 1]);
          }
          triples.push(trio);
      }
      return triples;
  }
  

  pushpg(){
      this.navCtrl.push(FoodSelection);
    }
  pushpie(){
    this.navCtrl.push(ApplePie);
    }
  pushtaco(){
    this.navCtrl.push(Taco);
    }
  pushravioli(){
    this.navCtrl.push(Ravioli);
    }
}
