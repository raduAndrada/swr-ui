import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { MdbNotificationRef, MdbNotificationService } from 'mdb-angular-ui-kit/notification';
import { PrivateEventsModalComponent } from 'src/app/private-events/modal/private-events-modal.component';
import { ConnectionService } from '../../../common/connection.service';
import { ConfirmationToastComponent } from '../../../common/toast/confirmation-toast/confirmation-toast.component';
import { allFormFields, contactFormSelectEventSource, contactFormSelectEventType, datePicker, privateEventInput3rdForm, privateEventInputContactForm, timePickers } from './form.model';

@Component({
  selector: 'private-events-form',
  templateUrl: './private-events-form.component.html'
})
export class PrivateEventsForm {
  
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  notificationRef: MdbNotificationRef<ConfirmationToastComponent> | null = null;


  privateEventInputContactForm = privateEventInputContactForm;
  contactFormSelectEventType = contactFormSelectEventType;
  datePicker = datePicker;
  timePickers = timePickers;
  startTimePicker = timePickers[0];
  endTimePicker = timePickers[1];
  privateEventInput3rdForm = privateEventInput3rdForm;
  contactFormSelectEventSource = contactFormSelectEventSource;


  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  @Output() 
  closeModalEventEmitter = new EventEmitter<boolean>();


  constructor(private fb: FormBuilder, 
    private connectionService: ConnectionService, 
    private notificationService: MdbNotificationService,
    public modalRef: MdbModalRef<PrivateEventsModalComponent>) {
    

    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormTel': ['', Validators.required],
      'contactFormCompany': ['', Validators.required],
      'contactFormPartyType': ['', Validators.required],
      'contactRequestDate': [''],
      'contactNumberOfPeople': [''],
      'contactAdditionalInfo': [''],
      // 'contactPrivateEventSource': [''],
      // 'startTimeControl': ['06:00 PM', Validators.required],
      // 'endTimeControl': ['11:00 PM', Validators.required],
      // 'datepickerControl': ['', Validators.required],
    });
  }

  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('The request was received. Someone will contact you soon.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }


  openToast() {
    setTimeout(() => this.notificationRef = this.notificationService.open(ConfirmationToastComponent, { 
      position: 'top-center',
      data: {
        toastTitle: "Request Recieved",
        toastMessage: "Someone will contact you soon"
      }
    }), 1500);
  }

  closeModal() {
    this.closeModalEventEmitter.emit(true);
  }
}
