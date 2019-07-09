import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents = []
  specialData = {}
  eventAdded = false;

  constructor(private _eventService: EventService,
              private _router: Router) { }

  ngOnInit() {
    this.getSpecialEvents();
  }

  getSpecialEvents()
  {
    this._eventService.getSpecialEvents()
      .subscribe(
        res => this.specialEvents = res,
        err => {
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 401) {
              this._router.navigate(['/login']);
            }
          }
        }
      )
  }

  addSpecial()
  {
    this._eventService.addSpecialEvents(this.specialData)
      .subscribe(
        res => {
          this.eventAdded = true;
          this.specialData = {};
          this.getSpecialEvents();
        },
        err => {
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 401) {
              this._router.navigate(['/login']);
            }
          }
        }
      )
  }

  deleteSpecial(event)
  {
    //console.log(`Id1 : ${id}`);
    this._eventService.deleteSpecialEvents(event)
      .subscribe(
        res => {
          //this.eventAdded = true;
          //this.specialData = {};
          this.getSpecialEvents();
        },
        err => {
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 401) {
              this._router.navigate(['/login']);
            }
          }
        }
      )
  }

}
