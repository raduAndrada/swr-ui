import { NgModule } from '@angular/core';
import { CoreModule } from '../common/common.module';
import { DishesHistoryCreateComponent } from './dishes-history-create/dishes-history-create.component';
import { DishesHistoryListComponent } from './dishes-history-list/dishes-history-list.component';

@NgModule({
  declarations: [
    DishesHistoryListComponent,
    DishesHistoryCreateComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    DishesHistoryListComponent,
    DishesHistoryCreateComponent
  ],
  providers: [],
})
export class DishesHistoryModule { }
