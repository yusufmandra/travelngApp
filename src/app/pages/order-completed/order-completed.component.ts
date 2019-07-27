import { Component, OnInit } from '@angular/core';
import { ThemefixesService } from '../../services/themefixes.service';

@Component({
  selector: 'app-order-completed',
  templateUrl: './order-completed.component.html',
  styleUrls: ['./order-completed.component.css']
})
export class OrderCompletedComponent implements OnInit {

  constructor(private _themefixesService: ThemefixesService) { }

  ngOnInit() {

    // Remove loader
    this._themefixesService.removeLoader();
  }

}
