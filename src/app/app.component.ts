import { Angular2TokenService } from 'angular2-token';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private tokenService: Angular2TokenService) {
    this.tokenService.init({
      apiPath: 'http://localhost:3000/api/v1',
      signInRedirect: '/login',
      globalOptions: {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    });
  }
}
