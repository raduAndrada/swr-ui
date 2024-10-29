import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class RestService<T> {

    protected baseUrl!: string;
 
    constructor(private readonly http: HttpClient) {
    }

    get(): Observable<T[]> {
        return this.http.get<T[]>(this.baseUrl).pipe(

            catchError(this.handleError<T[]>('getList'))
        );
    }

    getById(id: number): Observable<T> {
        const urlTemp = this.baseUrl + '/' + id;
        return this.http.get<T>(urlTemp).pipe(
            catchError(this.handleError<T>('getById'))
        );
    }

    update(updateDetails: T): Observable<T> {
        return this.http.put<T>(this.baseUrl, updateDetails).pipe(
            catchError(this.handleError<T>('update'))
        );
    }

    create(toAdd: T): Observable<T> {
        return this.http.post<T>(this.baseUrl, toAdd).pipe(
            catchError(this.handleError<T>('create'))
        );
    }

    deleteById(deleteId: number): Observable<T> {
        const urlTemp = this.baseUrl + '/' + deleteId;
        return this.http.delete<T>(urlTemp).pipe(
            catchError(this.handleError<T>('create'))
        );
    }

    setBaseUrl(value: string) {
        this.baseUrl = value;
    }

    handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            return of(result as T);
        };
    }
}
