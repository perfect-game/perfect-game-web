import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphQLClientModule } from '@app/modules/graphql-client';

import { LayoutRoutingModule } from './layout.routing-module';
import { LayoutService } from './layout.service';
import { LayoutComponent } from './layout.component';
import { SideBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [LayoutComponent, SideBarComponent],
  providers: [LayoutService],
  imports: [CommonModule, GraphQLClientModule, LayoutRoutingModule],
})
export class LayoutModule {}
