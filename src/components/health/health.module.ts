import { NgModule } from '@angular/core';

import { HealthRoutingModule } from './health.routing-module';
import { HealthComponent } from './health.component';
import { HealthService } from './health.service';

@NgModule({
  declarations: [HealthComponent],
  providers: [HealthService],
  imports: [HealthRoutingModule],
})
export class HealthModule {}
