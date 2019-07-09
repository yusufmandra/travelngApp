import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  listUsers = []

  constructor(private _userService: UserService,
              private _router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers()
  {
    this._userService.getUsers()
      .subscribe(
        res => this.listUsers = res,
        err => {
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 401) {
              this._router.navigate(['/login']);
            }
          }
        }
      )
  }

}
