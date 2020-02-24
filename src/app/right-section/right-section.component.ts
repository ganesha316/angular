import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css']
})
export class RightSectionComponent implements OnInit {

  public products:any;

  constructor(private crud:CrudService) { }

  ngOnInit() {
    this.crud.select('product').subscribe(
      (response) => {
        this.products = response['data'];
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
