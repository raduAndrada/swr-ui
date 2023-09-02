import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dish, DishCategory, DishMenu, SearchRequest, SearchResponse } from '../common/common.model';
import { RestService } from '../common/rest.service';

@Injectable({
  providedIn: 'root'
})
export class DishesRestService extends RestService<Dish>{

  constructor(private readonly _http: HttpClient) {
    super(_http);
    this.baseUrl =  environment.dishes.serverPort + environment.dishes.dishesApi;
  }


  getMenu(): Observable<any> {
    return this._http.get<any>(this.baseUrl + `/menu`).pipe(
      catchError(this.handleError<any>('getMenu'))
    );
  }

  getCategories(): Observable<DishCategory[]> {
    return this._http.get<DishCategory[]>(this.baseUrl + `/categories`).pipe(
      catchError(this.handleError<DishCategory[]>('getCategories'))
    );
  }

  postMenu(request: SearchRequest<string> ): Observable<SearchResponse<Dish>> {
    return this._http.post<SearchResponse<Dish>>(this.baseUrl + `/menu`, request).pipe(
      catchError(this.handleError<SearchResponse<Dish>>('postMenu'))
    );
  }

  deleteByName(name: string): Observable<SearchResponse<Dish>> {
    return this._http.delete<SearchResponse<Dish>>(this.baseUrl + `/menu/` + name).pipe(
      catchError(this.handleError<SearchResponse<Dish>>('deleteDishByName'))
    );
  }

}
