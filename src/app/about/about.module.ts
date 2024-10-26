import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { CoreModule } from '../common/common.module';



@NgModule({
  declarations: [
    AboutComponent,
  ],
  providers: [
  ],
  imports: [
    CoreModule
  ]
})
export class AboutModule { }
