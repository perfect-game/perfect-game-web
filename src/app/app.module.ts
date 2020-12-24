import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GraphQLClientModule } from '@app/modules/graphql-client';

import { AppRoutingModule } from './app.routing-module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, GraphQLClientModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
