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
    return this.get();
  }
}
