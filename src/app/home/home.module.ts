import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
]


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModuleModule

  ]
})
export class HomeModule { }
