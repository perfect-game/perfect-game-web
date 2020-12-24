import { NgModule } from '@angular/core';

import { GraphQLClientModule } from '@app/modules/graphql-client';

import { ExampleRoutingModule } from './example.routing-module';
import { ExampleComponent } from './example.component';
import { ExampleService } from './example.service';

@NgModule({
  declarations: [ExampleComponent],
  providers: [ExampleService],
  imports: [GraphQLClientModule, ExampleRoutingModule],
})
export class ExampleModule {}
