import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'layout', loadChildren: (): any => import('@app/views/layout').then((m) => m.LayoutModule) },
  {
    path: 'sign-in',
    loadChildren: (): any => import('@app/views/sign-in').then((m) => m.SignInModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
