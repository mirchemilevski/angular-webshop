import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselPageComponent } from './components/carousel-page/carousel-page.component';
import { StorePageComponent } from './components/store-page/store-page.component';
import { NavbarComponent } from './components/carousel-page/navbar/navbar.component';
import { CarouselComponent } from './components/carousel-page/carousel/carousel.component';
import { CartComponent } from './components/carousel-page/navbar/cart/cart.component';
import { MenuBarComponent } from './components/carousel-page/menu-bar/menu-bar.component';
import { StoreComponent } from './components/store-page/store/store.component';
import { FooterComponent } from './components/store-page/footer/footer.component';
import { FiltersComponent } from './components/store-page/store/filters/filters.component';
import { ProductsComponent } from './components/store-page/store/products/products.component';
import { ProductComponent } from './components/store-page/store/products/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselPageComponent,
    StorePageComponent,
    NavbarComponent,
    CarouselComponent,
    CartComponent,
    MenuBarComponent,
    StoreComponent,
    FooterComponent,
    FiltersComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
