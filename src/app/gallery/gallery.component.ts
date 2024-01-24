import { Component, OnInit } from '@angular/core';
import { ImageBlock } from '../common/common.model';
import { ImagesRestService } from '../common/images.rest.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  gallery: ImageBlock[] = [];
  constructor(private imagesRest: ImagesRestService) {}

  ngOnInit(): void {
    const origin = 'gallery::lightbox';

    this.imagesRest.findAllByOrigin(origin)
      .subscribe(gallery => {
        this.gallery = gallery;
      });
  }
  
}
