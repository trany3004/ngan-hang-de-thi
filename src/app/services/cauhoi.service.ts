import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseService } from './base.service';
import * as queryString from 'query-string';

@Injectable({
  providedIn: 'root',
})
export class CauHoiService {
  constructor(private http: HttpClient) {}

  getCauHoiRandom(chuDe, mucDo): Observable<any> {
    return this.http.get<any>(`/api/v1/cau-hoi/${chuDe}/${mucDo}`);
  }

  getCauHoi(): Observable<any[]> {
    // CAll API get chu ded
    return this.http.get<any[]>(`/api/v1/cau-hoi`);
  }

  submitAnswer(data): Observable<any> {
    return this.http.post<any>('/api/v1/cau-hoi/submit', data)
  }

  getCauHoiById(id): Observable<any> {
    // CAll API get chu ded
    return this.http.get<any>(`/api/v1/cau-hoi?id=${id}`);
  }

  createCauHoi(data): Observable<any> {
    return this.http.post<any>(`/api/v1/cau-hoi`, data);
  }

  updateCauHoi(id, data): Observable<any> {
    return this.http.put<any>(`/api/v1/cau-hoi/${id}`, data);
  }

  xoaCauHoi(id): Observable<any> {
    return this.http.delete<any>(`/api/v1/cau-hoi/${id}`);
  }
}
