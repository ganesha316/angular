import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { TransferService } from '../transfer.service';


@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css']
})
export class RightSectionComponent implements OnInit {

  public products:any;

  constructor(private crud:CrudService, private ts:TransferService) { }

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

    //subscribe with the same variable name which is used in transfer service for observable
    this.ts.subObj.subscribe(
      (response) => {
        this.crud.sendPost('brandFilter',response).subscribe(
          (res) => {
            this.products = res['data'];
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (error) => {
        console.log('error');
      }
    );
  }

}
