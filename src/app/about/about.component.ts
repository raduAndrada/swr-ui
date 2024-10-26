import { Component } from '@angular/core';
import { contact,  social_links } from '../common/common.model';
import { menuItems } from '../common/menu/menu.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent  {

  socialLinks = social_links;
  contact = contact;
  menuItems = menuItems;


  ngOnInit(): void {
 
  }


}
