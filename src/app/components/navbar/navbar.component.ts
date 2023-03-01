import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  isLoggedIn = false;
  user:any = null;

  constructor(public LoginService:LoginService){

  }

  ngOnInit(): void {

    this.isLoggedIn = this.LoginService.isLoggedIn();
    this.user = this.LoginService.getUser();
    this.LoginService.loginStatusSubjec.asObservable().subscribe(data => {
        this.isLoggedIn = this.LoginService.isLoggedIn();
        this.user = this.LoginService.getUser();
      }
    )
  }

  public logout(){
    this.LoginService.logout();
    window.location.reload();
  }

}
