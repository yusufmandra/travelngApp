import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private _packagesUrl = "http://localhost:3000/api/packages";
  private _singlePackageUrl = "http://localhost:3000/api/package";
  private _createOrderUrl = "http://localhost:3000/api/order/create";
  private _addPackageUrl = "http://localhost:3000/api/packages/add";

  constructor(private http: HttpClient) { }

  getPackages() {
    return this.http.get<any>(this._packagesUrl)
  }

  getSinglePackage(packageId) {
    return this.http.get<any>(this._singlePackageUrl+'/'+packageId)
  }

  createOrder(data) {
    return this.http.post<any>(this._createOrderUrl, data)
  }

  addPackage(data) {
    return this.http.post<any>(this._addPackageUrl, data)
  }

}
