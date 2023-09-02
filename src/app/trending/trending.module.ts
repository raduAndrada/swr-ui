import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingModalContentComponent } from './trending-modal/trending-modal-content/trending-modal-content.component';
import { TrendingModalComponent } from './trending-modal/trending-modal.component';
import { TrendingComponent } from './trending.component';
import { TrendingRestService } from './trending.rest.service';



@NgModule({
  declarations: [
    TrendingComponent,
    TrendingModalComponent,
    TrendingModalContentComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TrendingRestService
  ]
})
export class TrendingModule { }
