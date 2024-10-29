import { Component } from '@angular/core';
import { contact, social_links } from '../common.model';
import { EmailRestService } from '../email.rest.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {


  constructor(
    public emailService: EmailRestService
  ) { }
  
  socialLinks = social_links;
  contact= contact;


  sendEmail(event : any) {
    const addr = event.target.email.value;
    if (addr !== "" && addr.includes("@")) {
      this.emailService.sendEmail(addr).subscribe();
      window.location.reload();
    }
  }

}
