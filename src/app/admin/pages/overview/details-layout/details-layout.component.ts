import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-layout',
  templateUrl: './details-layout.component.html',
  styleUrls: ['./details-layout.component.scss'],
})
export class DetailsLayoutComponent implements OnInit {
  @Input() item: any;
  boxes = [
    {
      id: 1,
      selected: true,
      name: 'Pageviews',
      value: '540.280',
      percentage: '2.15%',
      epc: '308.20 USD',
      Ctr: '',
      imageUrl: 'path_to_image_1.jpg',
    },
    {
      id: 2,
      selected: false,
      name: 'Clicks',
      value: '70.210',
      percentage: '1.10%',
      epc: '',
      Ctr: '24.5%',
      imageUrl: 'path_to_image_2.jpg',
    },
    {
      id: 3,
      selected: false,
      name: 'Conversations',
      value: '42.340',
      percentage: '2.15%',
      epc: '',
      Ctr: '28.6%',
      imageUrl: 'path_to_image_3.jpg',
    },
    {
      id: 4,
      selected: false,
      name: 'Commission',
      value: '24.136',
      percentage: '0.24%',
      epc: '14 USD',
      Ctr: '',
      imageUrl: 'path_to_image_4.jpg',
    },
  ];

  constructor() {}

  ngOnChanges() {
    console.log(this.item);
    if (this.item == 0) {
      this.boxes.forEach((box) => (box.selected = box.id == 1));
    } else if (this.item == 1) {
      this.boxes.forEach((box) => (box.selected = box.id == 2));
    } else if (this.item == 2) {
      this.boxes.forEach((box) => (box.selected = box.id == 3));
    } else if (this.item == 3) {
      this.boxes.forEach((box) => (box.selected = box.id == 4));
    }
  }
  ngOnInit(): void {}
  selectBox(selectedBox: any) {
    this.boxes.forEach((box) => (box.selected = box.id === selectedBox.id));
  }
}
