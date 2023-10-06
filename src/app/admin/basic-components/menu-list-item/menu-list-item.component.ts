import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { menuItems } from 'src/app/utils/constants';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
})
export class MenuListItemComponent implements OnInit {
  menuItems: any = menuItems;
  expanded!: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: any;
  @Input() depth!: number;
  @Input() showContent!: boolean;
  @Output() mouseOver = new EventEmitter<any>();
  @Output() validatorEvent = new EventEmitter<any>();
  
  showVariable: any;

  messageShowValidator: boolean[] = [];

  showButton: boolean = false;
  constructor(public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit(): void {
    this.menuItemLoop();
  }
  onItemSelected(item: any) {
    if (this.showContent) {
      if (!item.children || !item.children.length) {
        this.router.navigate([item.route]);
      }
      if (item.children && item.children.length) {
        this.expanded = !this.expanded;
      }
    }
  }
  showHoverMessage(event: any, item: any) {
    if (!item.children || !item.children.length) {
      // this.router.navigate([item.route]);
      // var menuArray: any[] = [];
      // const obj = {
      //   name: item.displayName,
      //   route: item.route,
      //   coordinatex: event.offsetX,
      //   coordinatey: event.offsetY,
      //   showMessage: true
      // }
      // menuArray.push(obj)
      // this.mouseOver.emit(menuArray);
      for (let i = 0; i < menuItems.length; i++) {
        this.messageShowValidator[i] = false;
      }
      this.messageShowValidator[item.index] = true;
    }
    if (item.children && item.children.length) {
      // var childRouteArray: any[] = []
      // for (let i = 0; i < item.children.length; i++) {
      //   const obj = {
      //     name: item.children[i].displayName,
      //     route: item.children[i].route
      //   }
      //   childRouteArray.push(obj)
      // }
      // this.mouseOver.emit(childRouteArray);
      for (let i = 0; i < menuItems.length; i++) {
        this.messageShowValidator[i] = false;
      }
      this.messageShowValidator[item.index] = true;
    }
  }
  menuItemLoop() {
    menuItems;
    this.menuItems.map((_: any) => {
      this.messageShowValidator.push(false);
    });
    this.validatorEvent.emit(this.messageShowValidator);
  }
  hideHoverMessage(item: any) {
    this.showVariable = setTimeout(() => {
      this.messageShowValidator[item.index] = false;
    }, 150);
  }
  hideHoverMessageOnSwitching(item: any) {
    this.messageShowValidator[item.index] = false;
  }
  delayMouseEvent() {
    // setTimeout(() => {

    clearTimeout(this.showVariable);
    // }, 150);
  }

  routeToMenuPage(i: any) {
    this.router.navigate([i.route]);
  }
}
