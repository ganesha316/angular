import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }

  public subObj = new Subject;

  fetchByBrand(obj){
    this.subObj.next(obj)
  }
}
