import { NgModule } from '@angular/core';

import { HealthModule } from '@app/components/health';
import { ExampleModule } from '@app/components/example';

import { LayoutRoutingModule } from './layout.routing-module';
import { LayoutComponent } from './layout.component';
import { LayoutService } from './layout.service';

@NgModule({
  declarations: [LayoutComponent],
  providers: [LayoutService],
  imports: [LayoutRoutingModule, HealthModule, ExampleModule],
})
export class LayoutModule {}
