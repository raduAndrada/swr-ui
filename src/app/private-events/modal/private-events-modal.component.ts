import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'private-events-modal',
  templateUrl: './private-events-modal.component.html'
})
export class PrivateEventsModalComponent {
  constructor(public modalRef: MdbModalRef<PrivateEventsModalComponent>) {}

}
