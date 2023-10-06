import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component:AdminLayoutComponent,
    children: [

  {
    path: '',
    loadChildren: () =>
    import('./pages/getstarted/getstarted.module').then(
      (m) => m.GetstartedModule
    ),
  },

  {
    path: 'getstarted',
    loadChildren: () =>
    import('./pages/getstarted/getstarted.module').then(
      (m) => m.GetstartedModule
    ),
  },
  {
    path: 'overview',
    loadChildren: () =>
    import('./pages/overview/overview.module').then(
      (m) => m.OverviewModule
    ),
  },
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
