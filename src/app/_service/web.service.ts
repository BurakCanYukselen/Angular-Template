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

  public Get<TResponse>(url: string, httpHeaderEnabled: boolean = true): Observable<TResponse> {
    if (httpHeaderEnabled) {
      return this._httpClient.get<TResponse>(url, HttpOptions);
    } else {
      return this._httpClient.get<TResponse>(url);
    }
  }

  public Post<TResponse, TRequest>(url: string, body?: TRequest, httpHeaderEnabled: boolean = true): Observable<TResponse> {
    if (httpHeaderEnabled) {
      return this._httpClient.post<TResponse>(url, body, HttpOptions);
    } else {
      return this._httpClient.post<TResponse>(url, body);
    }
  }
}
