import { NgModule } from '@angular/core';

import { ExampleRoutingModule } from './example.routing-module';
import { ExampleComponent } from './example.component';
import { ExampleService } from './example.service';

@NgModule({
  declarations: [ExampleComponent],
  providers: [ExampleService],
  imports: [ExampleRoutingModule],
})
export class ExampleModule {}
