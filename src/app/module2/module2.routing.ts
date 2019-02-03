import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Module2Component } from './module2.component';

const routes: Routes = [
  { path: 'Module2', component: Module2Component },
];

export const Module2Routes = RouterModule.forChild(routes);

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class Module2RoutingModule { }
