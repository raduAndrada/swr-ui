import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Category, ImageBlock } from 'src/app/common/common.model';
import { MenuItemsService } from '../dishes.rest.service';

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

  menuCategories: Category[] = [];

  dishesMenuCarousel: ImageBlock[] = [];

  constructor(
    private menuItemsRest: MenuItemsService,
    private imagesRest: ImagesRestService
  ) {

  }

  ngOnInit() {
    this.menuItemsRest.getCategories()
      .subscribe(categories => {
        this.menuCategories = categories;
        setTimeout(() => {
          this.tabs.setActiveTab(0);
        }, 0);
      });

    // this.trendingService.getMenu()
    //   .subscribe(menu => {
    //     this.dishesMenu = menu;
    //   });
    const origin = 'dishes-menu::carousel';

    // this.imagesRest.findAllByOrigin(origin)
    //   .subscribe(dishesMenuCarousel => {
    //     this.dishesMenuCarousel = dishesMenuCarousel;
    //   });
  }

  ngAfterViewInit(): void {
  
  }


}
