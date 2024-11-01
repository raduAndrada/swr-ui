import {  NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DishesModule } from './dishes/dishes.module';
import { CoreModule } from './common/common.module';
import { PrivateEventsComponent } from './private-events/private-events.component';
import { PrivateEventsModalComponent } from './private-events/modal/private-events-modal.component';
import { PrivateEventsForm } from './private-events/modal/private-events-form/private-events-form.component';
import { TrendingModule } from './trending/trending.module';
import { AboutModule } from './about/about.module';
import { TranslateModule } from '@ngx-translate/core';
import { CateringComponent } from './catering/catering/catering.component';

@NgModule({
  declarations: [
    AppComponent,
    PrivateEventsComponent,
    PrivateEventsModalComponent,
    PrivateEventsForm,
    CateringComponent
  ],
  imports: [
    CoreModule,
    DishesModule,
    TrendingModule, 
    AboutModule,
    TranslateModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
