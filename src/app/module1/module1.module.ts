import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1Component } from './module1.component';
import { Module1RoutingModule } from './module1.routing';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  declarations: [
    Module1Component
  ]
})
export class Module1Module { }
