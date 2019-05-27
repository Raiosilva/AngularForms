import { FormService } from './shared/form.service';
import { HttpModule } from '@angular/http';
import { UsersModule } from './users/users.module';
import { AnswersModule } from './answers/answers.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from './forms/forms.module';
import { ChartsModule } from 'ng2-charts';
import { ColorPickerModule } from 'ngx-color-picker';
import { MaterializeModule } from 'ng2-materialize';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

import { Angular2TokenService } from 'angular2-token';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule.forRoot(),
    ColorPickerModule,
    ChartsModule,
    FormsModule,
    AnswersModule,
    AppRoutingModule,
// tslint:disable-next-line: deprecation
    HttpModule,
    RouterModule,
    UsersModule
  ],
  providers: [
    Angular2TokenService,
    FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
