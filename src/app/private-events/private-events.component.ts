import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ImageBlock, private_parties } from '../common/common.model';
import { PrivateEventsModalComponent } from './modal/private-events-modal.component';

@Component({
  selector: 'app-private-events',
  templateUrl: './private-events.component.html',
  styleUrls: ['./private-events.component.scss']
})
export class PrivateEventsComponent {

  modalRef!: MdbModalRef<PrivateEventsModalComponent>;

  config = {
    animation: true,
    backdrop: true,
    ignoreBackdropClick: false,
    keyboard: true,
    modalClass: 'modal-large',
  }

  services = [
    "Atmosfera perfecta",
    "Mancare delicioasa",
    "Bautura de calitate"
  ]
private_events = private_parties;

  constructor(private modalService: MdbModalService,
  ) { }

  ngOnInit() {
    const origin = `events::carousel`;
 
  }

  openModal() {
    this.modalRef = this.modalService.open(PrivateEventsModalComponent, this.config)
  }

}
