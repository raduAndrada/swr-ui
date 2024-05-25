import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { contact, ImageBlock, social_links } from '../common/common.model';
import { ImagesRestService } from '../common/images.rest.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  socialLinks = social_links;
  contact = contact;

  aboutCarousel: ImageBlock[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private imagesRest: ImagesRestService) {
  }

  ngOnInit(): void {
    //refactor this into a separate component
    const origin = 'about::carousel';
    // this.subscriptions.push(
    //   this.imagesRest.findAllByOrigin(origin)
    //     .subscribe(dishesMenuCarousel => {
    //       this.aboutCarousel = dishesMenuCarousel;
    //     }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
