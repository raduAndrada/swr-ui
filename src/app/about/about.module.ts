import { NgModule } from '@angular/core';
import { AboutModalContentComponent } from './about-modal/about-modal-content/about-modal-content.component';
import { AboutModalComponent } from './about-modal/about-modal.component';
import { AboutComponent } from './about.component';
import { AboutService } from './about.rest.service';
import { RestService } from '../common/rest.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TeamBlock } from './about.model';
import { CoreModule } from '../common/common.module';



@NgModule({
  declarations: [
    AboutComponent,
    AboutModalComponent,
    AboutModalContentComponent
  ],
  providers: [
    AboutService,
    RestService
  ],
  imports: [
    CoreModule
  ]
})
export class AboutModule { }
