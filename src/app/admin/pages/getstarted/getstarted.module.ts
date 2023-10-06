import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetstartedRoutingModule } from './getstarted-routing.module';
import { GetstartedLayoutComponent } from './getstarted-layout/getstarted-layout.component';


@NgModule({
  declarations: [
    GetstartedLayoutComponent
  ],
  imports: [
    CommonModule,
    GetstartedRoutingModule
  ]
})
export class GetstartedModule { }
