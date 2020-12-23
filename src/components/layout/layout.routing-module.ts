import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'health', loadChildren: (): any => import('@app/components/health').then((m) => m.HealthModule) },
      { path: 'example', loadChildren: (): any => import('@app/components/example').then((m) => m.ExampleModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
