import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewLayoutComponent } from './overview-layout/overview-layout.component';
import { NetworkLayoutComponent } from './network-layout/network-layout.component';
import { GraphLayoutComponent } from './graph-layout/graph-layout.component';
import { DetailsLayoutComponent } from './details-layout/details-layout.component';
import { MatTableModule } from '@angular/material/table';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    OverviewLayoutComponent,
    NetworkLayoutComponent,
    GraphLayoutComponent,
    DetailsLayoutComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    MatTableModule,
    NgApexchartsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,

  ]
})
export class OverviewModule { }
