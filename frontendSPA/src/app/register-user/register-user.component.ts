import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  user: User = new User();
  confirm_password: string = '';

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {}

  userRegister() {
    if (this.user.password !== this.user.confirm_password) {
      alert('As senhas digitadas não coincidem!');
      return;
    }

    this.registerService.checkEmailExists(this.user.email).subscribe(
      emailExists => {
        if (emailExists) {
          alert('O e-mail fornecido já está em uso. Por favor, escolha outro e-mail.');
        } else {
          console.log(this.user);
          this.registerService.registerUser(this.user).subscribe(
            data => {
              alert('Usuário registrado com sucesso!');
            },
            error => {
              alert('Falha ao registrar o usuário.');
            }
          );
        }
      },
      error => {
        alert('Falha ao verificar o e-mail. Tente novamente mais tarde.');
      }
    );
  }
}
