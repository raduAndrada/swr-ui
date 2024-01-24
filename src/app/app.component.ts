import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swr-ui';

  constructor (public readonly translateService: TranslateService) {
    this.translateService.addLangs(["en","ro"])
    this.translateService.setDefaultLang("ro");
  }

}
