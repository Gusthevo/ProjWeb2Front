import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private backendUrl = 'http://localhost:8080/api/messages'; // URL do backend Spring Boot

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.backendUrl);
  }

  sendMessage(sender: string, text: string): Observable<any> {
    const message: Message = { sender: sender, text: text };
    return this.http.post<any>(this.backendUrl, message);
  }
}
