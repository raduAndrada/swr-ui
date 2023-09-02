import { Component, Input } from '@angular/core';
import { TeamBlock } from '../../about.model';

@Component({
  selector: 'app-about-modal-content',
  templateUrl: './about-modal-content.component.html',
  styleUrls: ['./about-modal-content.component.scss']
})
export class AboutModalContentComponent {
 
  @Input()
  teamBlock!: TeamBlock;
}
