import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  //{path : '', component : TestComponent},


  
 {path: 'admin',  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },   // Lazy loading reference admin
 {path: 'sql',  loadChildren: () => import('./sql/sql.module').then(m=>m.SqlModule) } , // Lazy loading reference sql
 {path: 'angular',  loadChildren: () => import('./angular/angular.module').then(m=>m.AngularModule) } ,  // Lazy loading reference angular
 {path: 'devops',  loadChildren: () => import('./devops/devops.module').then(m=>m.DevopsModule) } ,  // Lazy loading reference DevopsModule
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
