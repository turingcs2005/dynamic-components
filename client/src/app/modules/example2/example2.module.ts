import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Example2RoutingModule } from './example2-routing.module';
import { Example2Component } from './example2.component';
import { SharedModule } from '../shared/shared.module';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';


@NgModule({
  declarations: [
    Example2Component,
    Child1Component,
    Child2Component,
    Child3Component,
  ],
  imports: [
    CommonModule,
    Example2RoutingModule,
    SharedModule
  ]
})
export class Example2Module { }
