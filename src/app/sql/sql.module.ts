import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SqlRoutingModule } from './sql-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SqlRoutingModule
  ]
})
export class SqlModule { }
