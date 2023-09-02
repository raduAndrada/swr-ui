import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DishesModule } from './dishes/dishes.module';
import { CoreModule } from './common/common.module';
import { DishesHistoryModule } from './dishes-history/dishes-history.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { RecipesModule } from './recipes/recipes.module';
import { HomeComponent } from './home/home.component';
import { PrivateEventsComponent } from './private-events/private-events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PrivateEventsModalComponent } from './private-events/modal/private-events-modal.component';
import { PrivateEventsForm } from './private-events/modal/private-events-form/private-events-form.component';
import { TrendingModule } from './trending/trending.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrivateEventsComponent,
    GalleryComponent,
    PrivateEventsModalComponent,
    PrivateEventsForm
  ],
  imports: [
    CoreModule,
    DishesModule,
    DishesHistoryModule,
    IngredientsModule,
    RecipesModule, 
    TrendingModule, 
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
