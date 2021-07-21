import { Component, OnInit } from '@angular/core';

import nestedData from '../../../nestedData.json';

console.log(nestedData[0].carouselProducts);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  data = nestedData[0].carouselProducts;
  constructor() {}

  ngOnInit(): void {}
}
