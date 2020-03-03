import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent implements OnInit {

  public categories:any;
  public brands:any;

  constructor(private crud:CrudService, private ts:TransferService) { }

  ngOnInit() {

    //fetch categories
    this.crud.select('get').subscribe(
      (response) => {
        this.categories = response['data'];
        console.log('category',this.categories);
      },
      (error) => {
        console.log(error);
      },
    )

    //fetch brands
    this.crud.select('brand').subscribe(
      (response) => {
        this.brands = response['data'];
        console.log('brand',response);
      },
      (error) => {
        console.log(error);
      },
    )
  }

  passData(brandId){
    this.ts.fetchByBrand({id:brandId});
  }

}
