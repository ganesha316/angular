import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private path = "http://localhost/ng_api/index.php/api/v1/category/";

  constructor(public http:HttpClient) { }

  select(name){
    return this.http.get(this.path+name);
  }
}
