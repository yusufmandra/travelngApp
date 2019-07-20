import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    // Remove id
    document.getElementsByTagName("body")[0].removeAttribute("id");
    // Disable loader on Init
    setTimeout(function() { document.getElementById("preloader").style.display = "none"; }, 500);
  }

}
