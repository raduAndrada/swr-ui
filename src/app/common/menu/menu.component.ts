import { Component, HostListener, ViewChild } from '@angular/core';
import { MdbSidenavComponent } from 'mdb-angular-ui-kit/sidenav';
import { contact, social_links } from '../common.model';
import { menuItems } from './menu.model';

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

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any){
    this.scrollFunction();
  }

  menuItems = menuItems;
  hidden = window.innerWidth >= 1400 ? false : true;
  display = 'none';

  showLocation = true;
  socialLinks = social_links;
  contact = contact;



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

}
