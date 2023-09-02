import { ComponentType } from '@angular/cdk/portal';
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent {

  modalRef: MdbModalRef<PopupComponent> | null = null;

  config = {
    animation: true,
    backdrop: true,
    ignoreBackdropClick: false,
    keyboard: true,
    modalClass: 'modal-large',
  }

  
  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(PopupComponent, this.config);
  }
}
