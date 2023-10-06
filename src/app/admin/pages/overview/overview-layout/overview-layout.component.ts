import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-layout',
  templateUrl: './overview-layout.component.html',
  styleUrls: ['./overview-layout.component.scss'],
})
export class OverviewLayoutComponent implements OnInit {
  graph_data: any = [];
  dataValues: any = [];

  data = {
    June: 300,
    July: 200,
    August: 130,
    September: 800,
    October: 300,
    November: 500,
    December: 135,
  };
  details_list: any = [
    {
      name: 'Pageviews',
      value: 540.28,
      percentage: '2.15%',
      epc: '308.20 USD',
      Ctr: '',
    },
    {},
    {
      name: 'Pageviews',
      value: 540.28,
      percentage: '2.15%',
      epc: '308.20 USD',
      Ctr: '',
    },
    {
      name: 'Pageviews',
      value: 540.28,
      percentage: '2.15%',
      epc: '308.20 USD',
      Ctr: '',
    },
    {
      name: 'Pageviews',
      value: 540.28,
      percentage: '2.15%',
      epc: '308.20 USD',
      Ctr: '',
    },
  ];
  graph_index: any;
  constructor() {}

  ngOnInit(): void {
    const graph = {
      data: this.data,
    };
    this.graph_data.push(graph);
    this.dataValues = this.graph_data[0].data;
  }
  getIndex(index: any) {
    console.log(index);
    this.graph_index = index;
  }
}
