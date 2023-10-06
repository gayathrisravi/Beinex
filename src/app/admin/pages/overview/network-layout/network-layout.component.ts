import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network-layout',
  templateUrl: './network-layout.component.html',
  styleUrls: ['./network-layout.component.scss'],
})
export class NetworkLayoutComponent implements OnInit {
  list: any = [
    {
      icon: 'Adservice.png',
      type: 'Adservice',
      clicks: 450,
      percentage: '2.50%',
      img: 'advertisement (1).png',
    },
    {
      icon: 'Adrecord.png',
      type: 'Adrecord',
      clicks: 380,
      percentage: '2.35%',
      img: 'letter-y.png',
    },
    {
      icon: 'MasOffer.png',
      type: 'MasOffer',
      clicks: 920,
      percentage: '1.20%',
      img: 'check.png',
    },
    {
      icon: 'Wealthfront.png',
      type: 'Wealthfront',
      clicks: 930,
      percentage: '',
      img: 'graph.png',
    },
    {
      icon: 'Grovia.png',
      type: 'Grovia',
      clicks: 465,
      percentage: '',
      img: 'star.png',
    },
  ];

  displayedColumns = ['type', 'clicks', 'percentage'];

  constructor() {}

  ngOnInit(): void {}
}
