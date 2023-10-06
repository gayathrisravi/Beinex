import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexStroke,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: any; // ApexChart;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  grid: any; //ApexGrid;
  colors: any;
  toolbar: any;
};

@Component({
  selector: 'app-graph-layout',
  templateUrl: './graph-layout.component.html',
  styleUrls: ['./graph-layout.component.scss'],
})
export class GraphLayoutComponent implements OnInit {
  @Input() item = [];
  @Output() itemEvent = new EventEmitter<string>();
  addNewItem(value: any) {
    this.itemEvent.emit(value);
  }

  chartoptions!: Partial<ChartOptions> | any;
  commonOptions!: Partial<ChartOptions> | any;

  data2 = {
    June: 400,
    July: 800,
    August: 230,
    September: 440,
    October: 200,
    November: 500,
    December: 104,
  };

  data3 = {
    June: 200,
    July: 550,
    August: 205,
    September: 340,
    October: 500,
    November: 270,
    December: 305,
  };
  data4 = {
    June: 340,
    July: 100,
    August: 405,
    September: 250,
    October: 100,
    November: 270,
    December: 350,
  };

  constructor() {}

  ngOnInit(): void {
    console.log(this.data2);

    this.initializationChartOption();

    this.chartoptions.series[0].data = Object.values(this.item);

    this.commonOptions = {
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
        width: 1,
      },
      toolbar: {
        tools: {
          show: true,
          selection: false,
        },
      },
      markers: {
        size: 3,
        hover: {
          size: 5,
        },
      },
      tooltip: {
        followCursor: false,
        theme: 'dark',
        x: {
          show: false,
        },

        marker: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return '';
            },
          },
        },
      },
      grid: {
        clipMarkers: false,
      },
      xaxis: {
        categories: ['June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
    };
  }
  initializationChartOption() {
    this.chartoptions = {
      series: [
        {
          name: 'chart',
          data: [],
        },
      ],
      chart: {
        id: 'yt',
        group: 'social',
        type: 'area',
        height: 300,
      },
      colors: ['#53b6f4'],
      yaxis: {
        tickAmount: 1,
        labels: {
          minWidth: 20,
        },
      },
    };
  }

  onTabChange(event: MatTabChangeEvent) {
    console.log('event trigg');
    if (event.index === 0) {
      console.log('tab 1');
      this.initializationChartOption();

      this.chartoptions.series[0].data = Object.values(this.item);
      this.addNewItem(event.index);
    } else if (event.index === 1) {
      console.log('tab 2');
      this.initializationChartOption();

      this.chartoptions.series[0].data = Object.values(this.data2);
      this.addNewItem(event.index);
    } else if (event.index === 2) {
      console.log('tab 3');
      this.initializationChartOption();

      this.chartoptions.series[0].data = Object.values(this.data3);
      this.addNewItem(event.index);
    } else if (event.index === 3) {
      console.log('tab 4');
      this.initializationChartOption();

      this.chartoptions.series[0].data = Object.values(this.data4);
      this.addNewItem(event.index);
    }
  }
}
