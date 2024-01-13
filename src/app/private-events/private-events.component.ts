import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ImageBlock } from '../common/common.model';
import { ImagesRestService } from '../common/images.rest.service';
import { PrivateEventsModalComponent } from './modal/private-events-modal.component';

@Component({
  selector: 'app-private-events',
  templateUrl: './private-events.component.html',
  styleUrls: ['./private-events.component.scss']
})
export class PrivateEventsComponent {

  modalRef!: MdbModalRef<PrivateEventsModalComponent>;
  eventsCarousel: ImageBlock[] = [];

  config = {
    animation: true,
    backdrop: true,
    ignoreBackdropClick: false,
    keyboard: true,
    modalClass: 'modal-large',
  }

  constructor(private modalService: MdbModalService,
    private imageRestService: ImagesRestService
  ) { }

  ngOnInit() {
    const origin = `events::carousel`;
    this.imageRestService.findAllByOrigin(origin).subscribe(
      events => this.eventsCarousel = events
    )
  }

  openModal() {
    this.modalRef = this.modalService.open(PrivateEventsModalComponent, this.config)
  }

}
