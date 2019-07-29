import { Component, OnInit } from '@angular/core';
import { ThemefixesService } from '../../services/themefixes.service';
import { PackageService } from '../../services/package.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderData = {
    "customerName": '',
    "customerEmail": '',
    "totalAmount": 0,
    "paymentMethod": "cod",
    "paymentRefId": "RF-ZX1390501090",
    "createdAt": new Date().toISOString()
  };

  constructor(private _themefixesService: ThemefixesService,
              private _packageService: PackageService,
              private _router: Router) { }

  ngOnInit() {
    console.log(this.orderData);
    // Set Total Amount
    this.getTotalAmount();
    // Remove loader
    this._themefixesService.removeLoader();
  }

  getTotalAmount() {
    const packages = JSON.parse(localStorage.getItem('packages'));
    if(packages){
      this.orderData.totalAmount = packages
                    .map(item => item.price)
                    .reduce((prev, curr) => parseInt(prev) + parseInt(curr) , 0);
    }
  }

  createOrder() {
    // Packages from Localstorage
    const packages = JSON.parse(localStorage.getItem('packages'));
    // Order details from Local storage
    var orderDetailsArray = [];
    var jsonObj;

    // Order details array
    packages.forEach(p => {
          jsonObj = {
              "packageId": p._id,
              "packageName": p.title,
              "packagePrice": p.price,
              "createdAt": new Date().toISOString()
            };
            orderDetailsArray.push(jsonObj);
         });

    const data = {
        "order": this.orderData,
        "order_details": orderDetailsArray
      }

    // Create Order call
    this._packageService.createOrder(data)
        .subscribe(
          res => {
            localStorage.removeItem('packages');
            this._router.navigate(['/order-completed'])
          },
          err => {
            console.log(err);
          }
        )
  }

}
