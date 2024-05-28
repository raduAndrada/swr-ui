import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReservationConfirmation } from './common.model';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationConfirmationRestService extends RestService<ReservationConfirmation>{

  constructor(private readonly _http: HttpClient) {
    super(_http);
    this.baseUrl = environment.communicationChannel.serverPort + environment.communicationChannel.emailApi;
  }



  sendReservationConfirmationEmail(reservationConfirmation: ReservationConfirmation, lang: string): Observable<ReservationConfirmation> {
    const params = new HttpParams().append("lang", lang);
    return this._http.post<ReservationConfirmation>(this.baseUrl, reservationConfirmation , {params}).pipe(
      catchError(this.handleError<ReservationConfirmation>('reservationConfirmation'))
    );
  }
}
