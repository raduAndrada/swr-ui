import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category, DishCategory, SearchRequest, SearchResponse } from '../common/common.model';
import { RestService } from '../common/rest.service';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService extends RestService<Category>{

  constructor(private readonly _http: HttpClient) {
    super(_http);
    this.baseUrl =  environment.dishes.serverPort + environment.dishes.dishesApi;
  }

  getCategories(): Observable<Category[]> {
    return this._http.get<Category[]>(this.baseUrl).pipe(
      catchError(this.handleError<Category[]>('getCategories'))
    );
  }

 

}
