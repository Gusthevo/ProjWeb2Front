import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;
  getCurrentUser: any;

  constructor() {}

  login() {
    // Implemente aqui a lógica de login, por exemplo, fazendo uma requisição HTTP para autenticar o usuário.
    // Atualize o valor de 'loggedIn' para true se o login for bem-sucedido.
    this.loggedIn = true;
  }

  logout() {
    // Implemente aqui a lógica de logout, por exemplo, limpando os dados de autenticação e encerrando a sessão do usuário.
    // Atualize o valor de 'loggedIn' para false.
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
