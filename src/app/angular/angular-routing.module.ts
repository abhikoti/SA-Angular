import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';

const routes: Routes = [ 
  {path : '', component : HomeComponent},
  {path : 'Lazy', component : LazyloadingComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
