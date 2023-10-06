import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetstartedLayoutComponent } from './getstarted-layout/getstarted-layout.component';

const routes: Routes = [
  {
    path: '',
    component: GetstartedLayoutComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetstartedRoutingModule { }
