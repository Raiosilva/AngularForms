import { AnswerNewComponent } from './answers/answer-new/answer-new.component';
import { AnswerListComponent } from './answers/answer-list/answer-list.component';
import { FormEditComponent } from './forms/form-edit/form-edit.component';
import { Angular2TokenService } from 'angular2-token';
import { FormListComponent } from './forms/form-list/form-list.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forms', component: FormListComponent, canActivate: [Angular2TokenService] },
  { path: 'forms/:id', component: FormEditComponent, canActivate: [Angular2TokenService] },
  { path: 'forms/new', component: FormEditComponent, canActivate: [Angular2TokenService] },
  { path: 'answers', component: AnswerNewComponent, canActivate: [Angular2TokenService] },
  { path: 'answers/:id', component: AnswerListComponent, canActivate: [Angular2TokenService] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
