import { Component, OnInit } from '@angular/core';
import { ThemefixesService } from '../../services/themefixes.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartPackages = [];
  totalPrice = 0;

  constructor(private _themefixesService: ThemefixesService) { }

  ngOnInit() {
    // List Cart Items
    this.listCartPackages();
    // Remove loader
    this._themefixesService.removeLoader();
  }

  listCartPackages() {
    this.cartPackages = JSON.parse(localStorage.getItem('packages'));
    if(this.cartPackages){
      this.totalPrice = this.cartPackages
                    .map(item => item.price)
                    .reduce((prev, curr) => parseInt(prev) + parseInt(curr) , 0);  
    }
  }

  removePackage(packageObj) {
    var r_packages = JSON.parse(localStorage.getItem("packages")); // updated
    for (var i = 0; i < r_packages.length; i++) {
        //var r_packages = JSON.parse(r_packages[i]);
        if (r_packages[i]._id == packageObj._id) {
            r_packages.splice(i, 1);
        }
    }
    r_packages = JSON.stringify(r_packages); //Restoring object left into packages again
    localStorage.setItem("packages", r_packages);
    this.listCartPackages();
  }

}
