import { Component } from '@angular/core';
import { contact, social_links } from '../common.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  socialLinks = social_links;
  contact= contact;

}
