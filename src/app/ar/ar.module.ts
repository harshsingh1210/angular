import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArComponent } from './ar.component';
import { Router, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ArComponent
  }
]


@NgModule({
  declarations: [
    ArComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ArModule { }
