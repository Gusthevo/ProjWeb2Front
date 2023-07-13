import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { ChatService } from '../chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  newMessage: string = '';

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(): void {
    this.chatService.getMessages().subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      },
      (error) => {
        console.log('Erro ao carregar as mensagens:', error);
      }
    );
  }

  sendMessage(): void {
    if (this.newMessage.trim() !== '') {
      const sender = 'Usuário'; // Defina o remetente de acordo com o usuário atual
      this.chatService.sendMessage(sender, this.newMessage).subscribe(
        () => {
          this.loadMessages(); // Atualiza a lista de mensagens após o envio
        },
        (error) => {
          console.log('Erro ao enviar a mensagem:', error);
        }
      );
      this.newMessage = '';
    }
  }
}
