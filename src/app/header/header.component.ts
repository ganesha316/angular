import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loggedIn:any;
  constructor(private auth:AuthService) {
    this.loggedIn = this.auth.isLoggedIn();
    console.log(this.loggedIn);
  }

  ngOnInit() {
  }

}
