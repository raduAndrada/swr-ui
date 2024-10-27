import { Component } from '@angular/core';
import { clients_top_picks, contact,  social_links } from '../common/common.model';
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

  clientsTopPicks = clients_top_picks

  header = "Descoperă aromele Clujului în fiecare îmbucătură."
  lead = "Colaborăm cu fermieri și artizani locali pentru a-ți aduce preparate vibrante, de sezon, care celebrează ce are mai bun regiunea noastră. Vino să te bucuri de o masă proaspătă și de neuitat."


  icons = [
    "fa-mug-hot",
    "fa-cookie-bite",
    "fa-bread-slice",
    "fa-egg",
    "fa-carrot",
    "fa-bacon",
    "fa-wine-bottle",
    "fa-birthday-cake",
  ]



  ngOnInit(): void {
 
  }


}
