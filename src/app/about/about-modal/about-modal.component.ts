import { Component, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { TeamBlock } from '../about.model';

@Component({
  selector: 'app-about-modal',
  templateUrl: './about-modal.component.html',
  styleUrls: ['./about-modal.component.scss']
})
export class AboutModalComponent {

  @Input()
  teamBlock!: TeamBlock;

  constructor(public modalRef: MdbModalRef<AboutModalComponent>) {}
}
