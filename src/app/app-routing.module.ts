import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Module1RoutingModule } from './module1/module1.routing';

const routes: Routes = [
  // { path: '', component: AppComponent },
  // { path: '**', component: AppComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    Module1RoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
