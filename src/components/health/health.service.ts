import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';

import { IHealthInformation } from './interfaces';

@Injectable()
export class HealthService {
  private healtInformationhQueryRef: QueryRef<IHealthInformation> = this.getHealthInformationQueryRef();

  constructor(private readonly apollo: Apollo) {}

  public getHealthInformationObservable(): Observable<ApolloQueryResult<IHealthInformation>> {
    return this.healtInformationhQueryRef.valueChanges;
  }

  public async refetchHealthInformation(): Promise<ApolloQueryResult<IHealthInformation>> {
    return this.healtInformationhQueryRef.refetch();
  }

  private getHealthInformationQueryRef(): QueryRef<IHealthInformation> {
    return this.apollo.watchQuery<IHealthInformation>({
      query: gql`
        query HealthInformation {
          health
          databaseHealth
        }
      `,
    });
  }
}
