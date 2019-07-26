import { Component, OnInit } from '@angular/core';
import { ThemefixesService } from '../../services/themefixes.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _themefixesService: ThemefixesService) { }

  ngOnInit() {

    // Remove loader
    this._themefixesService.removeLoader();
  }

}
