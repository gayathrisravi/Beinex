import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewLayoutComponent } from './overview-layout/overview-layout.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewLayoutComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
