import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cascade-container',
  templateUrl: './cascade-container.component.html',
  styleUrls:  ['./cascade-container.scss']
})
export class CascadeContainerComponent {

  @Input() dishName: any;
  @Input() description: any;
  @Input() imgAlt: any;
  @Input() imgSrc: any;
  @Input() rowColor: any;
  @Input() reversed: any; 
  constructor() { 
  }


}
