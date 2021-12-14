import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseService } from './base.service';
import * as queryString from 'query-string';


@Injectable({
  providedIn: 'root'
})



export class BaiKiemTraService {
  constructor(private http: HttpClient) {}

  fetch(filter?: any): Observable<any> {
    let query = '';
    if (filter) {
      query = queryString.stringify(filter);
    }
    return this.http.get<any>(`/api/v1/on-tap${query ? '?' : ''}${query}`);
  }

  taoCauHoiTuDong(data): Observable<any[]> {
    return this.http.post<any>(`/api/v1/on-tap/random`, data);
  }

  taoOnTap(data): Observable<any> {
    return this.http.post<any>(`/api/v1/on-tap`, data);
  }

  submitAnswer(data): Observable<any> {
    return this.http.post<any>('/api/v1/cau-hoi/ontap/submit', data, {
      headers: {
        Authorization: localStorage.getItem('token') || null
      }
    })
  }


 }
