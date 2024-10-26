import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Category, ImageBlock, Subcategory, menu_carousel_1, menu_carousel_2} from 'src/app/common/common.model';
import { MenuItemsService } from '../dishes.rest.service';

import {
  pulseAnimation
} from 'mdb-angular-ui-kit/animations';
import { MdbTabsComponent } from 'mdb-angular-ui-kit/tabs';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';



@Component({
  selector: 'app-dishes-menu',
  templateUrl: './dishes-menu.component.html',
  styleUrls: ['./dishes-menu.component.scss'],
  animations: [pulseAnimation()]
})
export class DishesMenuComponent implements AfterViewInit, OnInit {

  @ViewChild('tabs') tabs!: MdbTabsComponent;

  menuCategories: Category[] = [];

  menu_carousel_1 = menu_carousel_1;
  menu_carousel_2 = menu_carousel_2;

  config = {
    animation: true,
    backdrop: true,
    ignoreBackdropClick: false,
    keyboard: true,
    modalClass: 'modal-lg',
  }

  constructor(
    private modalService: MdbModalService,
    private menuItemsRest: MenuItemsService
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

    // this.imagesRest.findAllByOrigin(origin)
    //   .subscribe(dishesMenuCarousel => {
    //     this.dishesMenuCarousel = dishesMenuCarousel;
    //   });
  }



  ngAfterViewInit(): void {

  }


}
