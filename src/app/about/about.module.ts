import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { AboutService } from './about.rest.service';
import { CoreModule } from '../common/common.module';



@NgModule({
  declarations: [
    AboutComponent,
  ],
  providers: [
    AboutService,
  ],
  imports: [
    CoreModule
  ]
})
export class AboutModule { }
