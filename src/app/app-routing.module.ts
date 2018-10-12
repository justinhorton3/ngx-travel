import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './features/home/home.module#HomeModule'
  },
  {
    path: 'flights',
    loadChildren: './features/home/home.module#HomeModule'
  },
  {
    path: 'hotels',
    loadChildren: './features/home/home.module#HomeModule'
  },
  {
    path: 'cars',
    loadChildren: './features/home/home.module#HomeModule'
  },
  {
    path: 'blog',
    loadChildren: './features/home/home.module#HomeModule'
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
