import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { menuItems } from 'src/app/utils/constants';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  menuItems = menuItems;
  events: string[] = [];
  opened: boolean = false;
  isExpanded: boolean = false;
  isMenuOpen = true;
  contentMargin = 240;
  content: any;
  positionx: any;
  positiony: any;
  messageShowValidator: boolean[] = [];
  @Output() validatorEvent = new EventEmitter<any>();
  @Input() showContent!: boolean;

  @Output() sideNavCloseEvent = new EventEmitter<boolean>();
  constructor(public router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}
  open() {
    // this.isExpanded = false;
    this.opened = true;
  }

  close() {
    // this.isExpanded = true;
    this.opened = false;
  }
  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
  hoverMessageDetails(content: any) {
    console.log(content);

    this.content = content[0];
    this.positionx = this.content.coordinatex;
    this.positiony = this.content.coordinatey;
  }

  menuItemLoop() {
    menuItems;

    this.menuItems.map((_: any) => {
      this.messageShowValidator.push(true);
    });
  }
}
