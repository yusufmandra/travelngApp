import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../services/package.service';
import { ThemefixesService } from '../../services/themefixes.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-single-package',
  templateUrl: './single-package.component.html',
  styleUrls: ['./single-package.component.css']
})
export class SinglePackageComponent implements OnInit {

  package = [];

  constructor(private _packageService: PackageService,
              private _themefixesService: ThemefixesService,
              private _router: ActivatedRoute) { }

  ngOnInit() {

    // get packages
    this.getSinglePackage();
    // Remove loader
    this._themefixesService.removeLoader();
  }

  getSinglePackage(){
    const packageId = this._router.snapshot.params.id;
    this._packageService.getSinglePackage(packageId)
      .subscribe(
        res => {
          this.package = res
          // Set Package Image on before psudo element
          const styles = '.package_details:before{ background:url("'+ res.img +'") center center no-repeat !important; }'; 
          this.addStyle(styles)
        },
        err => console.log(err)
      )
  }

  addStyle(styles) { 
    /* Create style document */ 
    var css = document.createElement('style'); 
    css.type = 'text/css'; 
  
    css.appendChild(document.createTextNode(styles)); 
      
    /* Append style to the tag name */ 
    document.getElementsByTagName("head")[0].appendChild(css);
  }

}
