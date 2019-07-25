import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
import { ThemefixesService } from '../../../services/themefixes.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};
  userFound = false;

  constructor(private _auth: AuthService,
              private _router: Router,
              private _themefixesService: ThemefixesService) { }

  ngOnInit() {

    // Set Register Background
    this._themefixesService.setRegisterBg();
  }

  registerUser(){
    this.userFound = false;
    this._auth.registerUser(this.registerUserData)
        .subscribe(
          res => {
            localStorage.setItem('token', res.token)
            this._router.navigate(['/'])
          },
          err => {
            this.userFound = true;
          }
        )
  }

}
