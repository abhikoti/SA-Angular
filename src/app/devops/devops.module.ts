import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevopsRoutingModule } from './devops-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    DevopsRoutingModule,AngularMaterialModule,FormsModule,ReactiveFormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DevopsModule { }
