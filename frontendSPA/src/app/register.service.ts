import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl = 'http://localhost:8081/user';

  constructor(private httpClient: HttpClient) {}

  registerUser(user: User): Observable<Object> {
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}/register`, user);
  }

  checkEmailExists(email: string): Observable<boolean> {
    const url = `${this.baseUrl}/check-email-exists`;
    return this.httpClient.post<boolean>(url, { email });
  }
}
