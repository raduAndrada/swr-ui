import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { MdbNotificationRef, MdbNotificationService } from 'mdb-angular-ui-kit/notification';
import { ReservationConfirmation } from 'src/app/common/common.model';
import { ReservationConfirmationRestService } from 'src/app/common/reservation-confirmation.rest.service';
import { PrivateEventsModalComponent } from 'src/app/private-events/modal/private-events-modal.component';
import { ConfirmationToastComponent } from '../../../common/toast/confirmation-toast/confirmation-toast.component';
import { contactFormSelectEventSource, contactFormSelectEventType, datePicker, privateEventInput3rdForm, privateEventInputContactForm, timePickers } from './form.model';

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
  contactFormSelectEventSource = contactFormSelectEventSource;


  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  @Output()
  closeModalEventEmitter = new EventEmitter<boolean>();


  constructor(private fb: FormBuilder,
    private reservationConfirmationRestService: ReservationConfirmationRestService,
    private notificationService: MdbNotificationService,
    public modalRef: MdbModalRef<PrivateEventsModalComponent>) {


    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormTel': ['', Validators.required],
      'contactFormPartyType': ['', Validators.required],
      // 'contactPrivateEventSource': [''],
      // 'startTimeControl': ['06:00 PM', Validators.required],
      // 'endTimeControl': ['11:00 PM', Validators.required],
      // 'datepickerControl': ['', Validators.required],
    });
  }

  onSubmit() {
    const reservation: ReservationConfirmation = Object.assign({
      name: this.contactForm.get("contactFormName")?.value,
      email: this.contactForm.get("contactFormEmail")?.value,
      tel: this.contactForm.get("contactFormTel")?.value
    });

    var lang = localStorage.getItem("Language");
    if (!lang) {
      lang = "ro";
    }
    this.reservationConfirmationRestService.sendReservationConfirmationEmail(reservation,  lang).subscribe(() => {
      this.contactForm.reset();
      this.disabledSubmitButton = true;
      this.openToast();
      this.closeModal();
    }, error => {
      console.log('Error', error);
    });
  }


  openToast() {
    setTimeout(() => this.notificationRef = this.notificationService.open(ConfirmationToastComponent, {
      position: 'top-center',
      data: {
        toastTitle: 'Multumim pentru solicitare!',
        toastMessage: 'Cineva din echipa noastra va lua legatura cu tine in cel mai scurt timp posibil.'
      }
    }), 1500);
  }

  closeModal() {
    this.closeModalEventEmitter.emit(true);
  }
}
