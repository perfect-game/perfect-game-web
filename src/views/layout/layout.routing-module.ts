import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'profile' },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'profile', loadChildren: (): any => import('@app/views/profile').then((m) => m.ProfileModule) }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
