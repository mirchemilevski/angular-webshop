import { Component, OnInit } from '@angular/core';
import nestedData from '../../nestedData.json';
import { MessengerService } from '../../services/messenger.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css'],
})
export class StorePageComponent implements OnInit {
  jsonData: any = nestedData[1].storeProducts;
  filterData: any[] = [];
  check: String = '';

  constructor(private msg: MessengerService) {}

  ngOnInit(): void {
    this.showAll('allProducts');
    this.check = 'allProducts';
  }

  showAll(products: string) {
    this.filterData = [];
    this.filterData = [...this.jsonData];
    // this.filterData.push(this.jsonData);
    // console.log(this.filterData);
    this.check = products;
  }

  filterProduct(btn: string) {
    const filterType = this.jsonData.filter((el: any) => el.type === btn);
    this.filterData = [];
    this.filterData = [...filterType];
    // this.filterData.push(filterType);
    // console.log(this.filterData);
    this.check = btn;
  }

  handleToCart(expectedProduct: any) {
    // console.log(expectedProduct)
    this.msg.sendMessage(expectedProduct);
  }
}
