import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://ap.greatfuturetechno.com/login/';
  private errMsg: any;
  private serviceLocalized: any;
  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': '*/*',
      // Authorization: ''
    }),
  };
  doLogin(requestParams: FormData): Observable<any> {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'multipart/form-data' // Not required for form-data
    // });
    const headers = new HttpHeaders()
  .set('Access-Control-Allow-Origin', '*');
    // return this.http.post(this.apiUrl, requestParams, this.httpOptions);
    // return this.http.post(this.apiUrl, requestParams, { headers});

    return this.http.post(this.apiUrl, requestParams).pipe( catchError(errMsg =>this.handleError(errMsg)) );;

  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      this.errMsg = 'An error occurred:' + error.error.message;
    } else {
      const statusCode = 400;
      if (error.status === statusCode) {
        this.errMsg = error.error.errorMessage;
      } else {
        this.errMsg = this.serviceLocalized.errorMessage;
      }
    }
    return throwError(this.errMsg);
  }

}
