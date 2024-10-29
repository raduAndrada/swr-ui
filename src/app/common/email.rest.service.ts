import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReservationConfirmation } from './common.model';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class EmailRestService extends RestService<string>{

  constructor(private readonly _http: HttpClient) {
    super(_http);
    this.baseUrl = environment.communicationChannel.serverPort + 
    environment.communicationChannel.emailApi;
  }



  sendEmail(emailAddress: string): Observable<string> {
    return this._http.post<string>(this.baseUrl, {
      to: emailAddress,
      from: "",
      subject: "Newsletter GRAM Bistro",
      message: "Iti multumim pentru abonarea la newsletter-ul nostru!"

    }).pipe();
  }
}
