import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/sign-in' },
  {
    path: 'sign-in',
    loadChildren: (): any => import('@app/views/sign-in').then((m) => m.SignInModule),
  },
  { path: 'app', loadChildren: (): any => import('@app/views/layout').then((m) => m.LayoutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
