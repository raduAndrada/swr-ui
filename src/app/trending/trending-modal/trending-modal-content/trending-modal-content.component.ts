import { Component, Input } from '@angular/core';
import { TrendingBlock } from '../../trending.model';

@Component({
  selector: 'app-trending-modal-content',
  templateUrl: './trending-modal-content.component.html',
  styleUrls: ['./trending-modal-content.component.scss']
})
export class TrendingModalContentComponent {

  @Input()
  trendingBlock!: TrendingBlock;

}
