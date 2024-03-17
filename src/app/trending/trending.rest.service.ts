import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RestService } from '../common/rest.service';
import { TrendingBlock } from './trending.model';

@Injectable({
  providedIn: 'root'
})
export class TrendingRestService extends RestService<TrendingBlock>{

  constructor(private readonly _http: HttpClient) {
    super(_http);
    this.baseUrl =  environment.staticData.serverPort + environment.staticData.trendingApi;
  }

  findAllInTrending(lang: string ): Observable<TrendingBlock[]> {
    const params = new HttpParams().append('inTrending', true).append("lang", lang);
    return this._http.get<TrendingBlock[]>(this.baseUrl, { params }).pipe(
      catchError(this.handleError<TrendingBlock[]>('findAllInTrening'))
    );
  }

  deleteAllNotTrending(): Observable<any> {
    return this._http.delete(this.baseUrl).pipe(
      catchError(this.handleError<TrendingBlock>('deleteAllNotTrending'))
    );
  }


}
