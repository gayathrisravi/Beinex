import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
date:any;
maxdate:any;
minDate:any;
  constructor() { }

  ngOnInit(): void {
  }

}
