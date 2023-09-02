import { Component, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { TrendingBlock } from '../trending.model';

@Component({
  selector: 'app-trending-modal',
  templateUrl: './trending-modal.component.html',
  styleUrls: ['./trending-modal.component.scss']
})
export class TrendingModalComponent {

  @Input()
  trendingBlock!: TrendingBlock;

  constructor(public modalRef: MdbModalRef<TrendingModalComponent>) {}
}
