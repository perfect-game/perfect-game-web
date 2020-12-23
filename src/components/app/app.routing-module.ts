import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'layout', loadChildren: (): any => import('@app/components/layout').then((m) => m.LayoutModule) },
  {
    path: 'health',
    loadChildren: (): any => import('@app/components/health').then((m) => m.HealthModule),
  },
  {
    path: 'example',
    loadChildren: (): any => import('@app/components/example').then((m) => m.ExampleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
