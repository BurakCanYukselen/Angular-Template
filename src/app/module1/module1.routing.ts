import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Module1Component } from './module1.component';

const routes: Routes = [
  { path: 'Module1', component: Module1Component },
];

export const Module1Routes = RouterModule.forChild(routes);

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class Module1RoutingModule { }
