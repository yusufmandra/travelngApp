import { Component, OnInit } from '@angular/core';
import { ThemefixesService } from '../../services/themefixes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  destinations = [
              {
                'title': "Uganda",
                'img': 'assets/img/destination_1.jpeg',
                'count': 32
              },
              {
                'title': "United Arab Emirates",
                'img': 'assets/img/destination_2.jpeg',
                'count': 30
              },
              {
                'title': "South Africa",
                'img': 'assets/img/destination_3.jpeg',
                'count': 27
              },
              {
                'title': "Egypt",
                'img': 'assets/img/destination_4.jpeg',
                'count': 15
              }
             ];

  activities = [
              {
                'title': "Day Tours",
                'img': 'assets/img/activity_1.jpeg',
                'count': 9
              },
              {
                'title': "Sports",
                'img': 'assets/img/activity_2.jpeg',
                'count': 6
              },
              {
                'title': "Aqua Tourism",
                'img': 'assets/img/activity_3.jpeg',
                'count': 4
              },
              {
                'title': "Adventure",
                'img': 'assets/img/activity_4.jpeg',
                'count': 3
              }
             ];

  constructor(private _themefixesService: ThemefixesService) { }

  ngOnInit() {

    // Remove loader
    this._themefixesService.removeLoader();
  }

}
