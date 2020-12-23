import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GraphQLClientModule } from '@app/modules/graphql-client';

import { AppRoutingModule } from './app.routing-module';
import { AppComponent } from './app.component';

import { LayoutModule } from '../layout';
import { HealthModule } from '../health';
import { ExampleModule } from '../example';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GraphQLClientModule,
    AppRoutingModule,
    LayoutModule,
    HealthModule,
    ExampleModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
