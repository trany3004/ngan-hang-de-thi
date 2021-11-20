import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseService } from './base.service';
import * as queryString from 'query-string';

@Injectable({
  providedIn: 'root'
})



export class OnTapService {

  constructor(private http: HttpClient) {
  }

  getOnTap(): Observable<any[]> {
   // CAll API get chu ded
    return this.http.get<any[]>(`/api/v1/on-tap`);
  }

  getOnTapByCondition(query?): Observable<any[]> {
    // CAll API get chu ded
    const queryString = query ? Object.keys(query).map((key) => `${key}=${query[key]}`).join('&') : ''
     return this.http.get<any[]>(`/api/v1/on-tap${queryString ? '?'+queryString : ''}`);
   }

  getOnTapById(id): Observable<any> {
    // CAll API get chu ded
     return this.http.get<any>(`/api/v1/on-tap?id=${id}`);
   }

  createOnTap(data): Observable<any> {
    return this.http.post<any>(`/api/v1/on-tap`, data);
  }

  update(id, data): Observable<any> {
    return this.http.put<any>(`/api/v1/on-tap/${id}`, data);
  }

  xoaOnTap(id): Observable<any> {
    return this.http.delete<any>(`/api/v1/on-tap/${id}`);
  }


}
