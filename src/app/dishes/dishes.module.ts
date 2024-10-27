import { NgModule } from "@angular/core";
import { CoreModule } from "../common/common.module";
import { DishesMenuComponent } from './dishes-menu/dishes-menu.component';
import { MenuItemsService } from "./dishes.rest.service";

@NgModule({
    declarations: [
      DishesMenuComponent,

    ],
    imports: [
    CoreModule
],
    providers: [MenuItemsService],
    exports: [
        DishesMenuComponent,
    ]
  })
  export class DishesModule { }