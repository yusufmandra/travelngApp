import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../services/package.service';
import { ThemefixesService } from '../../services/themefixes.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packages = [];
             
  constructor(private _packageService: PackageService,
              private _themefixesService: ThemefixesService) { }

  ngOnInit() {
    // get packages
    this.getPackages();
    // Remove loader
    this._themefixesService.removeLoader();
  }

  getPackages(){
    this._packageService.getPackages()
      .subscribe(
        res => this.packages = res,
        err => console.log(err)
      )
  }

}
