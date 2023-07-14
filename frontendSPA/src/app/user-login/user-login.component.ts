import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginuserService } from '../loginuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();

  constructor(private loginuserService: LoginuserService, private router: Router) {}

  ngOnInit(): void {}

  userLogin() {
    console.log(this.user); // Exibe no console o usuário e a senha inseridos
    this.loginuserService.loginUser(this.user).subscribe(
      data => {
        alert("Login realizado com sucesso!");
        this.router.navigateByUrl('/home'); // Redireciona para a página de home
      },
      error => {
        alert("Usuário ou Senha incorretos, tente novamente!");
      }
    );
  }
}
