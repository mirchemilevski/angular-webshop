import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent implements OnInit {
  sticky: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      document.body.scrollTop > 700 ||
      document.documentElement.scrollTop > 700
    ) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
