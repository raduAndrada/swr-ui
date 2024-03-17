import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Dish, DishCategory, DishMenu, ImageBlock } from 'src/app/common/common.model';
import { DishesRestService } from '../dishes.rest.service';

import {
  pulseAnimation
} from 'mdb-angular-ui-kit/animations';
import { ImagesRestService } from 'src/app/common/images.rest.service';
import { MdbTabsComponent } from 'mdb-angular-ui-kit/tabs';



@Component({
  selector: 'app-dishes-menu',
  templateUrl: './dishes-menu.component.html',
  styleUrls: ['./dishes-menu.component.scss'],
  animations: [pulseAnimation()]
})
export class DishesMenuComponent implements AfterViewInit, OnInit {

  @ViewChild('tabs') tabs!: MdbTabsComponent;

  dishesMenu: DishMenu = Object.assign({});
  menuCategories: DishCategory[] = [];

  dishesMenuCarousel: ImageBlock[] = [];

  sandwiches: Dish[] = [];
  togo: Dish[] = [];
  brunch: Dish[] = [];
  drinks: Dish[] = [];

  constructor(
    private trendingService: DishesRestService,
    private imagesRest: ImagesRestService
  ) {

  }

  ngOnInit() {
    // this.trendingService.getCategories()
    //   .subscribe(categories => {
    //     this.menuCategories = categories;
    //   });

    // this.trendingService.getMenu()
    //   .subscribe(menu => {
    //     this.dishesMenu = menu;
    //   });
    const origin = 'dishes-menu::carousel';

    this.imagesRest.findAllByOrigin(origin)
      .subscribe(dishesMenuCarousel => {
        this.dishesMenuCarousel = dishesMenuCarousel;
      });
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.tabs.setActiveTab(0);
    // }, 0);
  }






  animationState = false;

  startAnimation(): void {
    this.animationState = true;
  }

  onAnimationDone(): void {
    this.animationState = false;
  }

}
