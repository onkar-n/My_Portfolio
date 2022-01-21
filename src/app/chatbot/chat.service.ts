import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  url = 'https://flask-app-rive.herokuapp.com/helloworld';
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.url);
  }

  postData(data: any): Observable<any>  {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let options = {
      headers: headers,
    };
    let body = JSON.stringify({ query: data });

    return this.http.post(this.url, body, options);
  }
}
