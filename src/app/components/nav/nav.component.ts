import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  cartItems = 0;

  constructor(private _authService: AuthService) { }

  ngOnInit() {

    this.totalCartItems();
  }

  totalCartItems(){
    this.cartItems = JSON.parse(localStorage.getItem('packages')).length;
  }

}
