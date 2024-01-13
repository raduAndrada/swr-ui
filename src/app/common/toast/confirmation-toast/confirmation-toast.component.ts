import { Component, Input } from '@angular/core';
import { MdbNotificationRef } from 'mdb-angular-ui-kit/notification';

@Component({
  selector: 'app-confirmation-toast',
  templateUrl: './confirmation-toast.component.html',
  styleUrls: ['./confirmation-toast.component.scss']
})
export class ConfirmationToastComponent {
 
  toastTitle!: string;

  toastMessage!: string;

  constructor(public notificationRef: MdbNotificationRef<ConfirmationToastComponent>) {}
}
