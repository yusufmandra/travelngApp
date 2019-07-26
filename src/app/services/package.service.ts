import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private _packagesUrl = "http://localhost:3000/api/packages";
  private _singlePackageUrl = "http://localhost:3000/api/package";

  constructor(private http: HttpClient) { }

  getPackages() {
    return this.http.get<any>(this._packagesUrl)
  }

  getSinglePackage(packageId) {
    return this.http.get<any>(this._singlePackageUrl+'/'+packageId)
  }

}
