import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2Component } from './module2.component';
import { Module2RoutingModule } from './module2.routing';

@NgModule({
  imports: [
    CommonModule,
    Module2RoutingModule
  ],
  declarations: [
    Module2Component
  ],
})
export class Module2Module { }
