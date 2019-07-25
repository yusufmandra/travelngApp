import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemefixesService {

  constructor() { }

  removeLoader() {
    // Remove id
    document.getElementsByTagName("body")[0].removeAttribute("id");
    // Disable loader on Init
    setTimeout(function() { document.getElementById("preloader").style.display = "none"; }, 500);
  }

  setLoginBg(){
    // Set id
    document.getElementsByTagName("body")[0].setAttribute("id", "login_bg");
    // Disable loader on Init
    setTimeout(function() { document.getElementById("preloader").style.display = "none"; }, 500);
  }

  setRegisterBg(){
    // Set id
    document.getElementsByTagName("body")[0].setAttribute("id", "register_bg");
    // Disable loader on Init
    setTimeout(function() { document.getElementById("preloader").style.display = "none"; }, 500);
  }

}
