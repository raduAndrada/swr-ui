import { NgModule } from "@angular/core";
import { CoreModule } from "../common/common.module";
import { DishesCreateComponent } from "./dishes-create/dishes-create.component";
import { DishesListComponent } from "./dishes-list/dishes-list.component";
import { DishesMenuComponent } from './dishes-menu/dishes-menu.component';
import { DishesRestService } from "./dishes.rest.service";

@NgModule({
    declarations: [
      DishesListComponent,
      DishesCreateComponent,
      DishesMenuComponent,
    ],
    imports: [
      CoreModule,
      
    ],
    providers: [DishesRestService],
    exports: [
        DishesListComponent,
        DishesCreateComponent,
        DishesMenuComponent
    ]
  })
  export class DishesModule { }