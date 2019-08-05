import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../../services/package.service';
import { ThemefixesService } from '../../../services/themefixes.service';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {

  packageData = {};
  selectedFile: File = null;
  packageAdded = false;

  constructor(private _themefixesService: ThemefixesService,
              private _packageService: PackageService) { }

  ngOnInit() {
    // Remove loader
    this._themefixesService.removeLoader();
  }

  addPackage() {
    
    const formData = new FormData();
    formData.append('img', this.selectedFile, this.selectedFile.name);

    for ( var key in this.packageData ) {
        formData.append(key, this.packageData[key]);
    }

    this._packageService.addPackage(formData)
        .subscribe(
          res => {
            this.packageAdded = true;
            (<HTMLFormElement>document.getElementById("packageForm")).reset();
          },
          err => {
            console.log(err);
          }
        )
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

}
