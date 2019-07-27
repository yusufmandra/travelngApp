import { Component, OnInit } from '@angular/core';
import { ThemefixesService } from '../../services/themefixes.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private _themefixesService: ThemefixesService) { }

  ngOnInit() {

    // Remove loader
    this._themefixesService.removeLoader();
  }

}
