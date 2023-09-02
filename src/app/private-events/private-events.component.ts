import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { PopupComponent } from '../common/modal/popup/popup.component';
import { PrivateEventsModalComponent } from './modal/private-events-modal.component';
import { card_data } from './private-events.model';

@Component({
  selector: 'app-private-events',
  templateUrl: './private-events.component.html',
  styleUrls: ['./private-events.component.scss']
})
export class PrivateEventsComponent {

  modalRef!: MdbModalRef<PrivateEventsModalComponent>;
  cardData = card_data;

  
  config = {
    animation: true,
    backdrop: true,
    ignoreBackdropClick: false,
    keyboard: true,
    modalClass: 'modal-large',
  }

  constructor(private modalService: MdbModalService) { }

  ngOnInit() {
  }

  openModal() {
    this.modalRef = this.modalService.open(PrivateEventsModalComponent, this.config)
  }
  
}
