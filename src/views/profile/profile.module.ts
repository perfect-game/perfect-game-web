import { NgModule } from '@angular/core';

import { CardModule } from '@app/components/card';

import { ProfileRoutingModule } from './profile.routing-module';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CardModule, ProfileRoutingModule],
})
export class ProfileModule {}
