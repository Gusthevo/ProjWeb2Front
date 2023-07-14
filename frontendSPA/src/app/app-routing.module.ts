import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'login', component: UserLoginComponent },
      { path: 'register', component: RegisterUserComponent },
      {path: 'chat', component: ChatComponent},
      {path: 'home', component: HomeComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
