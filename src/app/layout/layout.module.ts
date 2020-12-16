import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { LayoutService } from './layout.service';
import { LayoutRoutingModule } from './layout.routing-module';

@NgModule({
  declarations: [LayoutComponent],
  providers: [LayoutService],
  imports: [LayoutRoutingModule],
})
export class LayoutModule {}
