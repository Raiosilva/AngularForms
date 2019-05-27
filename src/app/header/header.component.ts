import { MzToastService } from 'ng2-materialize';
import { Angular2TokenService } from 'angular2-token';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private tokenService: Angular2TokenService,
    private toastService: MzToastService
  ) { }

  ngOnInit() {
  }

  signOut() {
    this.tokenService.signOut().subscribe(
      res =>      { },
      error =>    this.toastService.show('Error in Logout', 8000, 'red')
    );
  }
}
