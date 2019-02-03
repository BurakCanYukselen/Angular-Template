import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Module2Component } from './module2.component';
import { Module2RoutingModule } from './module2.routing';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    Module2RoutingModule
  ],
  declarations: [
    Module2Component
  ],
})
export class Module2Module { }
