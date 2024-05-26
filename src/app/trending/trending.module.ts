import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingModalContentComponent } from './trending-modal/trending-modal-content/trending-modal-content.component';
import { TrendingModalComponent } from './trending-modal/trending-modal.component';
import { TrendingComponent } from './trending.component';
import { TrendingRestService } from './trending.rest.service';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';



@NgModule({
  declarations: [
    TrendingComponent,
    TrendingModalComponent,
    TrendingModalContentComponent
  ],
  imports: [
    CommonModule,
    MdbCarouselModule
  ],
  providers: [
    TrendingRestService
  ]
})
export class TrendingModule { }
