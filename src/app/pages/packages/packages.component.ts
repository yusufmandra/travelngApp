import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../services/package.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packages = [];
             
  constructor(private _packageService: PackageService) { }

  ngOnInit() {
    // get packages
    this.getPackages();
    // Remove id
    document.getElementsByTagName("body")[0].removeAttribute("id");
    // Disable loader on Init
    setTimeout(function() { document.getElementById("preloader").style.display = "none"; }, 500);
  }

  getPackages(){
    this._packageService.getPackages()
      .subscribe(
        res => this.packages = res,
        err => console.log(err)
      )
  }

}
