import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'ar',
        loadChildren: () => import('./ar/ar.module').then(m => m.ArModule)
      },
      {
        path: 'vr',
        loadChildren: () => import('./vr/vr.module').then(m => m.VrModule)
      },
      {
        path: 'online-classes',
        loadChildren: () => import('./online-classes/online-classes.module').then(m => m.OnlineClassesModule)
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
