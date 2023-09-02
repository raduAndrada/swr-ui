import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { environment } from 'src/environments/environment';
import { RestService } from '../common/rest.service';
import { AboutModalComponent } from './about-modal/about-modal.component';
import { our_sorty_slides as our_story_slides, TeamBlock } from './about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  storySlides = our_story_slides;

  team: TeamBlock[] = [];
  modalRef!: MdbModalRef<AboutModalComponent>;

  config = {
    animation: true,
    backdrop: true,
    ignoreBackdropClick: false,
    keyboard: true,
    modalClass: 'modal-large',
  }

  constructor(
    private modalService: MdbModalService,
    private readonly aboutRest : RestService<TeamBlock>) {
      aboutRest.setBaseUrl(environment.staticData.serverPort + environment.staticData.teamApi);
  }

  ngOnInit(): void {
    this.aboutRest.get().subscribe(
      team => {
        this.team = team;
      }
    )
  }


  openModal(teamBlock: TeamBlock) {
    this.modalRef = this.modalService.open(AboutModalComponent, this.config)
    this.modalRef.component.teamBlock = teamBlock;
  }

}
