import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RestService } from '../common/rest.service';
import { TrendingBlock } from '../trending/trending.model';
import { TeamBlock } from './about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService extends RestService<TeamBlock> {


  constructor(private readonly _http: HttpClient) {
    super(_http );
    this.baseUrl = environment.staticData.teamApi;
  }

  findAllInTrending(): Observable<TrendingBlock[]> {
    const params = new HttpParams().append('inTrending', true);
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
