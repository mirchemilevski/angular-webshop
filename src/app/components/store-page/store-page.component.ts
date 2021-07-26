import { Component, OnInit } from '@angular/core';
import nestedData from '../../nestedData.json';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css'],
})
export class StorePageComponent implements OnInit {
  jsonData: any = nestedData[1].storeProducts;
  filterData: any[] = [];
  check: String = '';

  constructor() {}

  ngOnInit(): void {
    this.showAll('allProducts');
    this.check = 'allProducts';
  }

  showAll(products: any) {
    this.filterData = [];
    this.filterData = [...this.jsonData];
    // this.filterData.push(this.jsonData);
    // console.log(this.filterData);
    this.check = products;
  }

  filterProduct(btn: any) {
    const filterType = this.jsonData.filter((el: any) => el.type === btn);
    this.filterData = [];
    this.filterData = [...filterType];
    // this.filterData.push(filterType);
    // console.log(this.filterData);
    this.check = btn;
  }
}
