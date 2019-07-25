import { Component, OnInit } from '@angular/core';
import { ThemefixesService } from '../../../services/themefixes.service';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {

  constructor(private _themefixesService: ThemefixesService) { }

  ngOnInit() {
    // Remove loader
    this._themefixesService.removeLoader();
  }

}
