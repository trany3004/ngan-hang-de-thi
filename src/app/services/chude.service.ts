import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseService } from './base.service';
import * as queryString from 'query-string';

@Injectable({
  providedIn: 'root'
})



export class ChuDeService {

  constructor(private http: HttpClient) {
  }

  getChuDe(): Observable<any[]> {
   // CAll API get chu ded
    return this.http.get<any[]>(`/api/v1/chu-de`);
  }

  getChuDeByCondition(query?): Observable<any[]> {
    // CAll API get chu ded
    const queryString = query ? Object.keys(query).map((key) => `${key}=${query[key]}`).join('&') : ''
     return this.http.get<any[]>(`/api/v1/chu-de${queryString ? '?'+queryString : ''}`);
   }

  getChuDeById(id): Observable<any> {
    // CAll API get chu ded
     return this.http.get<any>(`/api/v1/chu-de?id=${id}`);
   }

  createChuDe(data): Observable<any> {
    return this.http.post<any>(`/api/v1/chu-de`, data);
  }

  update(id, data): Observable<any> {
    return this.http.put<any>(`/api/v1/chu-de/${id}`, data);
  }

  xoaChuDe(id): Observable<any> {
    return this.http.delete<any>(`/api/v1/chu-de/${id}`);
  }


}
