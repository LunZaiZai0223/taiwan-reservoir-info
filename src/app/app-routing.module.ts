import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ChartListComponent } from './pages/chart-list/chart-list.component';
import { ReservoirDetailComponent } from './pages/reservoir-detail/reservoir-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ChartListComponent,
      },
      {
        path: ':reservoirId',
        component: ReservoirDetailComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
