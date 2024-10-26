import { Component, Input } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { PrivateEventsModalComponent } from 'src/app/private-events/modal/private-events-modal.component';

@Component({
  selector: 'app-event-placeholder',
  templateUrl: './event-placeholder.component.html',
})
export class EventPlaceholderComponent {

  @Input()
  events: any;

  @Input()
  text: any;

  @Input()
  title: any;

  @Input()
  services: any = [];

  modalRef!: MdbModalRef<PrivateEventsModalComponent>;

  config = {
    animation: true,
    backdrop: true,
    ignoreBackdropClick: false,
    keyboard: true,
    modalClass: 'modal-large',
  }

  constructor(private modalService: MdbModalService,
  ) { }
  
  openModal() {
    this.modalRef = this.modalService.open(PrivateEventsModalComponent, this.config)
}

}
