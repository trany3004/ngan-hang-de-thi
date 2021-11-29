import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private http: HttpClient) {}

  createUser(data): Observable<any> {
    return this.http.post<any>('/api/v1/user', data);
  }
  update(data): Observable<any> {
    return this.http.post<any>('/api/v1/user', data);
  }

  login(data): Observable<any> {
    return this.http.post<any>('/api/v1/login', data);
  }

  clearUserInfo() {
    localStorage.removeItem('user.name');
    localStorage.removeItem('user.username');
    localStorage.removeItem('user.role');
    localStorage.removeItem('user.email');
  }

  clearToken() {
    localStorage.removeItem('token');
  }
  goToLoginPage() {
    // this.router.navigate(['/auth/login'])
  }
  logout() {
    this.clearToken();
    this.clearUserInfo();
    this.goToLoginPage();
  }
}
