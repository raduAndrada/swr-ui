import { NgModule } from '@angular/core';
import { CoreModule } from '../common/common.module';
import { RecipesCreateComponent } from './recipes-create/recipes-create.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';


@NgModule({
    declarations: [
        RecipesListComponent,
        RecipesCreateComponent
    ],
    imports: [
        CoreModule
    ],
    providers: [],
    exports: [
        RecipesListComponent,
        RecipesCreateComponent
    ]
})
export class RecipesModule { }
