import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Module1Component } from './module1.component';
import { Module1RoutingModule } from './module1.routing';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    Module1RoutingModule
  ],
  declarations: [
    Module1Component
  ]
})
export class Module1Module { }
