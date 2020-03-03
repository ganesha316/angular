import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  set(){
    localStorage.setItem('username','Ganesh');
  }

  get(){
    return localStorage.getItem('username');
  }

  remove(){
    localStorage.removeItem('username');
  }

  isLoggedIn(){
    console.log(this.get());
    return true;
    // return this.get() != false;
  }
}
