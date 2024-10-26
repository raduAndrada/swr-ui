import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { catering } from 'src/app/common/common.model';
import { PrivateEventsModalComponent } from 'src/app/private-events/modal/private-events-modal.component';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html'
})
export class CateringComponent {

  modalRef!: MdbModalRef<PrivateEventsModalComponent>;

  config = {
    animation: true,
    backdrop: true,
    ignoreBackdropClick: false,
    keyboard: true,
    modalClass: 'modal-large',
  }
  catering= catering;

  services = [
    "Lunch boxes",
    "Sandwich boxes",
    "Christmas boxes",
    "Easter boxes"
  ]

  text ="Catering delicios pentru orice ocazie!Lasă-ne să aducem aromele din bucătăria noastră la următorul tău eveniment! Fie că este vorba de o petrecere de naștere, o întâlnire corporate sau o sărbătoare specială, oferim soluții de catering personalizate care își vor impresiona invitații. Contactează-ne la [număr de telefon] sau completează formularul de mai jos și să începem să planificăm o experiență de neuitat împreună!"


  constructor(private modalService: MdbModalService,
  ) { }
  
  openModal() {
    this.modalRef = this.modalService.open(PrivateEventsModalComponent, this.config)
}

}
