import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'example1', loadChildren: () => import('./modules/example1/example1.module').then(m => m.Example1Module) },
  { path: 'example2', loadChildren: () => import('./modules/example2/example2.module').then(m => m.Example2Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
