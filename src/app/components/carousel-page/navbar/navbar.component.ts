import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartItems: any[] = [];
  cartTotal: number = 0;
  cartLength: any = 0;
  constructor(private msg: MessengerService) {}

  ngOnInit() {
    this.msg.getMessage().subscribe((product: any) => {
      this.cartItems.push({
        productName: product.title,
        price: product.price,
        qty: product.qty,
      });

      //  console.log(product);

      this.cartLength = this.cartItems.length;
      this.cartTotal = 0;

      // console.log(this.cartLength);
      // console.log(this.cartTotal);

      this.cartItems.forEach((item) => {
        // console.log(item);
        this.cartTotal += item.qty * item.price;
      });
    });
  }
}
