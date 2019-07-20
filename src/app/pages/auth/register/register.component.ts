import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};
  userFound = false;

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
    // Set id
    document.getElementsByTagName("body")[0].setAttribute("id", "register_bg");
    // Disable loader on Init
    setTimeout(function() { document.getElementById("preloader").style.display = "none"; }, 500);
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
