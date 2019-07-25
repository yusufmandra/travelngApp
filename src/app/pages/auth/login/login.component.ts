import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
import { ThemefixesService } from '../../../services/themefixes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  loginError = false;

  constructor(private _auth: AuthService,
              private _router: Router,
              private _themefixesService: ThemefixesService) { }

  ngOnInit() {

    // Set Login Background
    this._themefixesService.setLoginBg();
  }

  loginUser () {
    this.loginError = false;
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/']);
      },
      err => {
        this.loginError = true;
      }
    ) 
  }

}
