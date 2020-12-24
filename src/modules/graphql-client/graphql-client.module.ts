import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { environment } from '@app/environment';

@NgModule({
  imports: [HttpClientModule],
  exports: [],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink): Record<string, unknown> => ({
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: environment.graphqlEndpoint,
        }),
      }),
      deps: [HttpLink],
    },
  ],
})
export class GraphQLClientModule {}
