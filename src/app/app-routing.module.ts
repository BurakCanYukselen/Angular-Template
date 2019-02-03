import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Module1RoutingModule } from './module1/module1.routing';
import { Module2RoutingModule } from './module2/module2.routing';

const routes: Routes = [
  // { path: '', component: AppComponent },
  // { path: '**', component: AppComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    Module1RoutingModule,
    Module2RoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
