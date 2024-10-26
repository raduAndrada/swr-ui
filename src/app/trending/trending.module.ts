import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingComponent } from './trending.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { CoreModule } from "../common/common.module";



@NgModule({
  declarations: [
    TrendingComponent
  ],
  imports: [
    CommonModule,
    MdbCarouselModule,
    CoreModule
]
})
export class TrendingModule { }
