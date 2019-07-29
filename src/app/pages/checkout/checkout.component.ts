import { Component, OnInit } from '@angular/core';
import { ThemefixesService } from '../../services/themefixes.service';
import { PackageService } from '../../services/package.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private _themefixesService: ThemefixesService,
              private _packageService: PackageService) { }

  ngOnInit() {

    // Remove loader
    this._themefixesService.removeLoader();
  }

  createOrder() {
    const data = {
        "order": {
        "customerId": "5d32e32da97f06189bebd88a",
        "customerName": "Yusuf G",
        "customerEmail": "mandrayusuf@gmail.com",
        "totalAmount": "5000",
        "paymentMethod": "google",
        "paymentRefId": "RF-ZX1390501090",
        "createdAt": "2012-04-23T18:25:43.511Z"
        },
        "order_details": [
          {
                "packageId":"5d32ee151c9d440000d3c6d8",
                "packageName":"Arc Triomphe",
                "packagePrice":"54",
                "createdAt":"2012-04-23T18:25:43.511Z"
          },
          {
            "packageId":"5d32ee5b1c9d440000d3c6d9",
                  "packageName":"Notredam",
                  "packagePrice":"125",
                  "createdAt":"2012-04-23T18:25:43.511Z"
          }
        ]
      }
    // Create Order call
    // this._packageService.createOrder(data)
    //     .subscribe(
    //       res => {
    //         console.log(res);
    //         // this._router.navigate(['/'])
    //       },
    //       err => {
    //         console.log(err);
    //       }
    //     )
  }

}
