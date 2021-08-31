import { NgModule } from '@angular/core';

import { CardModule } from '@app/components/card';

import { SignInRoutingModule } from './sign-in.routing-module';
import { SignInComponent } from './sign-in.component';

@NgModule({
  declarations: [SignInComponent],
  imports: [CardModule, SignInRoutingModule],
})
export class SignInModule {}
