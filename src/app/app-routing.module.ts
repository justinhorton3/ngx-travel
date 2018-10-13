import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './features/home/home.module#HomeModule'
  },
  {
    path: 'flights',
    loadChildren: './features/search/search.module#SearchModule'
  },
  {
    path: 'hotels',
    loadChildren: './features/search/search.module#SearchModule'
  },
  {
    path: 'cars',
    loadChildren: './features/search/search.module#SearchModule'
  },
  {
    path: 'blog',
    loadChildren: './features/home/home.module#HomeModule'
  },
  { path: '', redirectTo: 'flights', pathMatch: 'full' },
  { path: '**', redirectTo: 'flights', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
