import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const HttpOptions = {
  headers: new HttpHeaders()
    .set('Content-Type', 'Application/Json')
};

@Injectable({ providedIn: 'root' })
export class WebService {
  constructor(private _httpClient: HttpClient) { }

  public Get<TResponse>(url: string): Observable<TResponse> {
    return this._httpClient.get<TResponse>(url, HttpOptions);
  }

  public Post<TResponse, TRequest>(url: string, body?: TRequest): Observable<TResponse> {
    return this._httpClient.post<TResponse>(url, body, HttpOptions);
  }
}
