import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packages = [
              {
                'title': "Arc Triomphe",
                'description': "Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.",
                'price': 54,
                'img': 'assets/img/tour_1.jpg',
                'category': 'Historic'
              },
              {
                'title': "Notredam",
                'description': "Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.",
                'price': 125,
                'img': 'assets/img/tour_2.jpg',
                'category': 'CHURCHES'
              },
              {
                'title': "Pompidue Museum",
                'description': "Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.",
                'price': 45,
                'img': 'assets/img/tour_3.jpg',
                'category': 'MUSEUM'
              },
              {
                'title': "Versailles",
                'description': "Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.",
                'price': 25,
                'img': 'assets/img/tour_4.jpg',
                'category': 'WALKING'
              },
              {
                'title': "Tour Eiffel",
                'description': "Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.",
                'price': 65,
                'img': 'assets/img/tour_5.jpg',
                'category': 'HISTORIC'
              },
             ];
  constructor() { }

  ngOnInit() {
    // Remove id
    document.getElementsByTagName("body")[0].removeAttribute("id");
    // Disable loader on Init
    setTimeout(function() { document.getElementById("preloader").style.display = "none"; }, 500);
  }

}
