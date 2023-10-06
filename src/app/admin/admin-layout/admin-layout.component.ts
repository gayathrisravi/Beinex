import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  opened: boolean = false;
  isExpanded: boolean = false;
  isMenuOpen = true;
  contentMargin = 240;
  showContent: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
      this.showContent = false;
    } else {
      this.contentMargin = 240;
      this.showContent = true;
    }
  }
}
