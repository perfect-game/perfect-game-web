import { NgModule } from '@angular/core';

import { GraphQLClientModule } from '@app/modules/graphql-client';

import { LayoutRoutingModule } from './layout.routing-module';
import { LayoutComponent } from './layout.component';
import { LayoutService } from './layout.service';

@NgModule({
  declarations: [LayoutComponent],
  providers: [LayoutService],
  imports: [GraphQLClientModule, LayoutRoutingModule],
})
export class LayoutModule {}
