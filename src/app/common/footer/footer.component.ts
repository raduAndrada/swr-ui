import { Component } from '@angular/core';
import { social_links } from '../common.model';
import { additional_links } from './footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  socialLinks = social_links;
  additionalLinks = additional_links;

}
