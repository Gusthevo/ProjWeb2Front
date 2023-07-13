import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private baseUrl = "http://localhost:8081/user/login";
  constructor(private httpClient: HttpClient) { }

  loginUser(user: User): Observable<object> {
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`, user);
}
}