import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "http://localhost:3000/api/events";
  private _specialEventsUrl = "http://localhost:3000/api/special";
  private _addSpecialEventsUrl = "http://localhost:3000/api/special/add";
  private _deleteSpecialEventsUrl = "http://localhost:3000/api/special/delete";

  constructor(private http: HttpClient) { }
  
  getEvents() {
    return this.http.get<any>(this._eventsUrl)
  }

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl)
  }

  addSpecialEvents(specialData){
    return this.http.post<any>(this._addSpecialEventsUrl, specialData)
  }

  deleteSpecialEvents(specialData){
    return this.http.post<any>(this._deleteSpecialEventsUrl, specialData)
  }

}
