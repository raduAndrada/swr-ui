import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DishesModule } from './dishes/dishes.module';
import { CoreModule } from './common/common.module';
import { PrivateEventsComponent } from './private-events/private-events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PrivateEventsModalComponent } from './private-events/modal/private-events-modal.component';
import { PrivateEventsForm } from './private-events/modal/private-events-form/private-events-form.component';
import { TrendingModule } from './trending/trending.module';
import { AboutModule } from './about/about.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
    PrivateEventsComponent,
    GalleryComponent,
    PrivateEventsModalComponent,
    PrivateEventsForm
  ],
  imports: [
    CoreModule,
    DishesModule,
    TrendingModule, 
    AboutModule,
    TranslateModule.forRoot()
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ro' }],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
