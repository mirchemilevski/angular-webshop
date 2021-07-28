import { Component, OnInit } from '@angular/core';
import nestedData from '../../../nestedData.json';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  carouselProduct = nestedData[0].carouselProducts;

  constructor(private msg: MessengerService) {}

  ngOnInit(): void {}

  handleAddToCart(expectedProduct: any) {
    // console.log(expectedProduct)
    this.msg.sendMessage(expectedProduct);
  }
}
