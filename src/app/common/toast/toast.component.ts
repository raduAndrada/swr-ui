import { Component } from '@angular/core';
import { MdbNotificationRef, MdbNotificationService } from 'mdb-angular-ui-kit/notification';
import { ConfirmationToastComponent } from './confirmation-toast/confirmation-toast.component';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  notificationRef: MdbNotificationRef<ConfirmationToastComponent> | null = null;

  constructor(private notificationService: MdbNotificationService) {}

  openToast() {
    this.notificationRef = this.notificationService.open(ConfirmationToastComponent);
  }
}
