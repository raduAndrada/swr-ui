import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { MdbNotificationRef, MdbNotificationService } from 'mdb-angular-ui-kit/notification';
import { ReservationConfirmation } from 'src/app/common/common.model';
import { ReservationConfirmationRestService } from 'src/app/common/reservation-confirmation.rest.service';
import { PrivateEventsModalComponent } from 'src/app/private-events/modal/private-events-modal.component';
import { contactFormDate, contactFormDates, contactFormHour, privateEventInput3rdForm, privateEventInputContactForm, } from './form.model';
import { ConfirmationToastComponent } from '../toast/confirmation-toast/confirmation-toast.component';

@Component({
  selector: 'reservation-form',
  templateUrl: './reservation-form.html'
})
export class ReservationForm {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  notificationRef: MdbNotificationRef<ConfirmationToastComponent> | null = null;


  privateEventInputContactForm = privateEventInputContactForm;
  contactFormDate = contactFormDate;
  privateEventInput3rdForm = privateEventInput3rdForm;
  contactFormDates = contactFormDates;
  contactFormHour = contactFormHour;


  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }


  constructor(private fb: FormBuilder,
    private reservationConfirmationRestService: ReservationConfirmationRestService,
    private notificationService: MdbNotificationService,
    public modalRef: MdbModalRef<PrivateEventsModalComponent>) {


    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormTel': ['', Validators.required],
      'contactFormDate': ['', Validators.required],
      'contactFormHour': ['', Validators.required],
      'contactNumberOfPeople': ['', Validators.compose([Validators.required, Validators.min(1)])]
    });
  }

  onSubmit() {
    const reservation: ReservationConfirmation = Object.assign({
      name: this.contactForm.get("contactFormName")?.value,
      email: this.contactForm.get("contactFormEmail")?.value,
      tel: this.contactForm.get("contactFormTel")?.value,
      requestDate: this.contactForm.get("contactFormDate")?.value,
      noOfPeople: this.contactForm.get("contactNumberOfPeople")?.value,
      additionalInfo: this.contactForm.get("contactFormHour")?.value
    });
    console.log(reservation)

    
    this.reservationConfirmationRestService.sendReservationConfirmationEmail(reservation,  "ro").subscribe(() => {
      this.modalRef.close()
      this.contactForm.reset();
      this.disabledSubmitButton = true;
      this.openToast();
   
    }, error => {
      console.log('Error', error);
    });
  }


  openToast() {
    setTimeout(() => this.notificationRef = this.notificationService.open(ConfirmationToastComponent, {
      position: 'top-center',
      data: {
        toastTitle: `Am primit solicitarea ta!`,
        toastMessage: `Te vom contacta in cel mai scurt timp pentru a confirma.`
      }
    }), 1500);
  }

 
}
