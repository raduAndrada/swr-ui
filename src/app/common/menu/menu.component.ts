import { Component, HostListener, isDevMode, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MdbSidenavComponent } from 'mdb-angular-ui-kit/sidenav';
import { contact, ReservationConfirmation, social_links } from '../common.model';
import { menuItems } from './menu.model';
import { ReservationForm } from '../reservation-form/reservation-form';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @ViewChild('sidenav', { static: true })
  sidenav!: MdbSidenavComponent;

  @ViewChild('btnBackToTop')
  btnBackToTop!: HTMLButtonElement;
  languages = ["ro", "en"];
  allLanguages = ["ro", "en"];
  curentLanguage: any;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any){
    this.scrollFunction();
  }

  menuItems = menuItems;
  hidden = window.innerWidth >= 1400 ? false : true;
  display = 'none';

  showLocation = true;
  socialLinks = social_links;
  contact = contact;

  banner: string[] = [ "./assets/banner-2.jpeg", "./assets/banner-3.jpeg", "./assets/banner-4.jpeg"];

  modalRef!: MdbModalRef<ReservationForm>;

  selectLanguage = $localize `selectLanguage`

  constructor (public readonly translateService: TranslateService,
    public readonly router: Router,
    private modalService: MdbModalService) {
    this.curentLanguage = localStorage.getItem('Language');
    if (!this.curentLanguage) {
      this.curentLanguage = "ro";
    }
  }

  getCurrentRoute() {
    return this.router.url;
}



  changeLanguage(lang: string) {
    this.languages = this.allLanguages.filter(( language) => {
        return language !== lang;
    });
    this.curentLanguage = lang;
    localStorage.setItem('Language', lang);
    if (isDevMode()) {
       location.reload();
    }
}

  scrollFunction() {
    if (
      document.body.scrollTop > 900 ||
      document.documentElement.scrollTop > 900
    ) {
      this.display = "block";
    } else {
      this.display = "none";
    }

    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 10
    ) {
      this.showLocation = false;
    } else {
      this.showLocation = true;
    }
  }


  scrollToTop(): void {
    window.scrollTo(0, 0);
  };

  openModal() {
    const config = {
      animation: true,
      backdrop: true,
      ignoreBackdropClick: false,
      keyboard: true,
      modalClass: 'modal-large',
    }
    this.modalRef = this.modalService.open(ReservationForm, config);
  }

  currentPageNotMenu(){
    return !this.router.url.includes(menuItems[0].link);
  }

}
