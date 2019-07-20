import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Remove id
    document.getElementsByTagName("body")[0].removeAttribute("id");
    // Disable loader on Init
    setTimeout(function() { document.getElementById("preloader").style.display = "none"; }, 500);
  }

}
