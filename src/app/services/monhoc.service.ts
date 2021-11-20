import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseService } from './base.service';
import * as queryString from 'query-string';

@Injectable({
  providedIn: 'root'
})



export class MonHocService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<any[]> {
   // CAll API get chu ded
    return this.http.get<any[]>(`/api/v1/mon-hoc`);
  }

}
