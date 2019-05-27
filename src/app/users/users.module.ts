import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'ng2-materialize';
import { FormsModule } from './../forms/forms.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
// tslint:disable-next-line: deprecation
    HttpModule,
    MaterializeModule.forRoot()
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UsersModule { }
