import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  public productData = [
    {
      name:'product 1',
      price:100,
      img:'product1.jpg'
    },
    {
      name:'product 2',
      price:200,
      img:'product2.jpg'
    },
    {
      name:'product 3',
      price:300,
      img:'product3.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
