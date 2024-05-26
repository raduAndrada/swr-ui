import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { TrendingModalComponent } from './trending-modal/trending-modal.component';
import { TrendingBlock } from './trending.model';
import { TrendingRestService } from './trending.rest.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent {

  modalRef!: MdbModalRef<TrendingModalComponent>;

  trendingBlocks!: TrendingBlock[];

  config = {
    animation: true,
    backdrop: true,
    ignoreBackdropClick: false,
    keyboard: true,
    modalClass: 'modal-lg',
  }

  constructor(private modalService: MdbModalService,
              private trendingService: TrendingRestService
    ) { }

  ngOnInit() {
    const v = localStorage.getItem("Language");
    this.trendingService.findAllInTrending( v ? v : "ro")
        .subscribe(trending => {
          this.trendingBlocks = trending;
        });
  }

  openModal(trendingBlock: TrendingBlock) {
    this.modalRef = this.modalService.open(TrendingModalComponent, this.config)
    this.modalRef.component.trendingBlock = trendingBlock;
  }
}
