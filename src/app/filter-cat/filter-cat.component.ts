import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-filter-cat',
  templateUrl: './filter-cat.component.html',
  styleUrls: ['./filter-cat.component.css']
})
export class FilterCatComponent implements OnInit {

  public products:any;
  constructor(private route:ActivatedRoute, private crud:CrudService) { }

  ngOnInit() {
    let filterCatId = this.route.snapshot.params['id1'];
    this.crud.sendPost('categoryFilter',{'cat_id': filterCatId}).subscribe(
      (response) => {
        console.log('response',response);
        this.products = response['data'];
      },
      (error) => {
        console.log('error',error);
      }
    );
  }

}
