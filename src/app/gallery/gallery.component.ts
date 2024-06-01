import { Component, OnInit } from '@angular/core';
import { ImageBlock } from '../common/common.model';
import { ImagesRestService } from '../common/images.rest.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  loading = true;


  ngOnInit(): void {

    if (this.loading) {
      setTimeout(() => {
      this.loading = false;
    }, 1500);
    }
  }
  
}
