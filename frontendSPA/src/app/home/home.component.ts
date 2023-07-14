import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchTerm = '';
  users: User[] = [];
  currentUser: User | undefined;
  selectedUser: User | undefined;


  constructor(private userService: UserService, private router: Router) {}

  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
      },
      error => {
        console.log('Falha ao obter a lista de usuários:', error);
      }
    );
  }

  startChat(user: User): void {
    console.log('Iniciando chat com', user.usuario);
  }

  selectUser(user: User): void {
    this.selectedUser = user;
    this.loadMessages(user);
  }
  
  loadMessages(user: User): void {
    // Lógica para carregar as mensagens do usuário a partir do UserService ou ChatService
    // Atualize a propriedade messages com as mensagens do usuário selecionado
  }
  redirectToChat(): void {
    this.router.navigate(['/chat']);
}
}
