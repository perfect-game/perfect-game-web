import { NgModule } from '@angular/core';

import { GraphQLClientModule } from '@app/modules/graphql-client';

import { HealthRoutingModule } from './health.routing-module';
import { HealthComponent } from './health.component';
import { HealthService } from './health.service';

@NgModule({
  declarations: [HealthComponent],
  providers: [HealthService],
  imports: [GraphQLClientModule, HealthRoutingModule],
})
export class HealthModule {}
