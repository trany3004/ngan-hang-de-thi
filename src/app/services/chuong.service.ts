import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
 import * as queryString from 'query-string';

import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})



export class ChuongService {

  constructor(private http: HttpClient) {
  }



  get(query?: any): Observable<any[]> {
    const queryString = query ? Object.keys(query).map((key) => `${key}=${query[key]}`).join('&') : ''

    return this.http.get<any[]>(`/api/v1/chuong-hoc${queryString ? '?'+queryString : ''}`);
  }



}
