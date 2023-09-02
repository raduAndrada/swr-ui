import { NgModule } from '@angular/core';
import { CoreModule } from '../common/common.module';
import { IngredientsCreateComponent } from './ingredients-create/ingredients-create.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';


@NgModule({
    declarations: [
        IngredientsListComponent,
        IngredientsCreateComponent,
    ],
    imports: [
        CoreModule,
    ],
    providers: [],
    exports: [
        IngredientsListComponent,
        IngredientsCreateComponent
    ]
})
export class IngredientsModule { }
