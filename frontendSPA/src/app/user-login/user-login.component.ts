import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginuserService } from '../loginuser.service';
import { RegisterUserComponent } from '../register-user/register-user.component';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();

  constructor(private loginuserService: LoginuserService) {}

  ngOnInit(): void {}

  userLogin() {
    console.log(this.user); // Exibe no console o usuário e a senha inseridos
    this.loginuserService.loginUser(this.user).subscribe(
      data => {
        alert("Login realizado com sucesso!");
      },
      error => {
        alert("Login falhou, insira corretamente o Usuário e senha");
      }
    );
  }
}
