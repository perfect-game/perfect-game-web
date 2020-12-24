import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { HealthService } from './health.service';
import { IHealthInformation } from './interfaces';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
})
export class HealthComponent implements OnInit, OnDestroy {
  public healthInformation?: IHealthInformation;

  private healthInformationSubscription!: Subscription;

  constructor(private readonly healthService: HealthService) {}

  public ngOnInit(): void {
    this.healthInformationSubscription = this.healthService
      .getHealthInformationObservable()
      .subscribe((healthInformation) => {
        this.healthInformation = healthInformation.data;
      });

    this.refreshHealthInformation();
  }

  public ngOnDestroy(): void {
    this.healthInformationSubscription.unsubscribe();
  }

  public refreshHealthInformation(): boolean {
    this.healthService.refetchHealthInformation();

    return true;
  }
}
