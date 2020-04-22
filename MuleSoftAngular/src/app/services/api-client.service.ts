import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(
    public http:HttpClient
  ) {}

  get<T>(url: string, options?:any):Observable<T> {
    return this.http.get<T>(url, {
      params: options
    })
  }

  post<T>(url: string, options?:any):Observable<T> {
    return this.http.post<T>(url,options, {
      headers:new HttpHeaders({
        "Content-Type":"application/json"
      })
    })
  }

  delete<T>(url: string, options?:any):Observable<T> {
    return this.http.delete<T>(url, {
      params: options
    })
  }
}

