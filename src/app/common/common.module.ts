import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarModule, ButtonsModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConnectionService } from './connection.service';
import { ConfirmationToastComponent } from './toast/confirmation-toast/confirmation-toast.component';
import { MdbNotificationModule } from 'mdb-angular-ui-kit/notification';
import { MdbLightboxModule } from 'mdb-angular-ui-kit/lightbox';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbDatepickerModule } from 'mdb-angular-ui-kit/datepicker';
import { MdbTimepickerModule } from 'mdb-angular-ui-kit/timepicker';
import { MdbSidenavModule } from 'mdb-angular-ui-kit/sidenav';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import {MdbDropdownModule} from 'mdb-angular-ui-kit/dropdown';
import { ImagesRestService } from './images.rest.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReservationForm } from './reservation-form/reservation-form';




@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    ConfirmationToastComponent,
    ReservationForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MdbFormsModule,
    MdbDatepickerModule,
    MdbTimepickerModule,
    MdbNotificationModule,
    MdbLightboxModule,
    MdbTabsModule,
    MdbCarouselModule,
    MdbSidenavModule,
    MdbCollapseModule,
    MdbPopoverModule,
    MdbDropdownModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderClient,
        deps: [HttpClient]
      }
    })
  ],
  providers: [MdbModalService, ConnectionService, ImagesRestService],
  exports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    MenuComponent,
    FooterComponent,
    BrowserAnimationsModule,
    ButtonsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MdbFormsModule,
    MdbDatepickerModule,
    MdbTimepickerModule,
    MdbNotificationModule,
    MdbLightboxModule,
    MdbTabsModule,
    MdbCarouselModule,
    MdbSidenavModule,
    MdbCollapseModule,
    MdbPopoverModule,
    TranslateModule,
    ReservationForm
  ]
})
export class CoreModule { }

export function httpLoaderClient(http: HttpClient) {
  return new TranslateHttpLoader(http, `../../assets/i18n/`, `.json`);
}
