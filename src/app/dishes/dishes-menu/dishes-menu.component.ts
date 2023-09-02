import { Component } from '@angular/core';
import { Dish, DishCategory, DishMenu, menuCategories, Subcategory } from 'src/app/common/common.model';
import { DishesRestService } from '../dishes.rest.service';

import {
  pulseAnimation
} from 'mdb-angular-ui-kit/animations';



@Component({
  selector: 'app-dishes-menu',
  templateUrl: './dishes-menu.component.html',
  styleUrls: ['./dishes-menu.component.scss'],
  animations: [pulseAnimation()]
})
export class DishesMenuComponent {

  dishesMenu: DishMenu = Object.assign({});
  menuCategories: DishCategory[] = [];

  sandwiches: Dish[] = [];
  togo: Dish[] = [];
  brunch: Dish[] = [];
  drinks: Dish[] = [];

  constructor(
    private trendingService: DishesRestService
  ) { }

  ngOnInit() {
    this.trendingService.getCategories()
      .subscribe(categories => {
        console.log(categories)
        this.menuCategories = categories;
      });

    this.trendingService.getMenu()
      .subscribe(menu => {
        // console.log(menu)
        this.dishesMenu = menu;
        console.log( this.dishesMenu)
        // this.dishesMenu.set("Sandwiches", menu.dishes["Sandwiches"]);
        // this.dishesMenu.set("ToGo", menu.dishes["ToGo"]);
        // this.dishesMenu.set("Brunch", menu.dishes["Brunch"]);
        // this.dishesMenu.set("Drinks", menu.dishes["Drinks"]);
      });
  }


  animationState = false;

  startAnimation(): void {
    this.animationState = true;
  }

  onAnimationDone(): void {
    this.animationState = false;
  }

}
