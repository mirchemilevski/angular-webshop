import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselPageComponent } from './components/carousel-page/carousel-page.component';
import { StorePageComponent } from './components/store-page/store-page.component';
import { NavbarComponent } from './components/carousel-page/navbar/navbar.component';
import { CarouselComponent } from './components/carousel-page/carousel/carousel.component';
import { MenuBarComponent } from './components/carousel-page/menu-bar/menu-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselPageComponent,
    StorePageComponent,
    NavbarComponent,
    CarouselComponent,
    MenuBarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
