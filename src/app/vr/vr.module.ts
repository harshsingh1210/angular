import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VrComponent } from './vr.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VrComponent
  }
]

@NgModule({
  declarations: [
    VrComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VrModule { }
