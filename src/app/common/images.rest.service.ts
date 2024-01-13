import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImageBlock } from './common.model';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesRestService extends RestService<ImageBlock>{

  constructor(private readonly _http: HttpClient) {
    super(_http);
    this.baseUrl = environment.staticData.serverPort + environment.staticData.imagesApi;
  }


  findAllByOrigin(origin: string): Observable<any> {
    const params = new HttpParams().append('origin', origin);
    return this._http.get<any>(this.baseUrl, {params}).pipe(
      catchError(this.handleError<any>('getMenu'))
    );
  }

  uploadImage(imageBlock: ImageBlock, file: File): Observable<ImageBlock> {
    return this._http.post<ImageBlock>(this.baseUrl, { "imageBlock": imageBlock, "file": file }).pipe(
      catchError(this.handleError<ImageBlock>('uploadImage'))
    );
  }
}
