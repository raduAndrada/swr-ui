import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-row-template',
  templateUrl: './row-template.component.html',
})
export class RowTemplateComponent {
  
  @Input()
  backgroundImage: any;
  @Input()
  aditionalContainerClasses: any;
  @Input()
  title: any;
  @Input()
  lead: any;
  @Input()
  reversed: any;
  @Input()
  rowColor: any;

}
