import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { HomeComponent } from './home/home.component';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';


@NgModule({
  declarations: [
    HomeComponent,
    LazyloadingComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule
  ]
})
export class AngularModule { }
