import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Example2Component } from './example2.component';

const routes: Routes = [
  { path: '', component: Example2Component },
  { path: 'child1', component: Example2Component },
  { path: 'child2', component: Example2Component },
  { path: 'child3', component: Example2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Example2RoutingModule { }
