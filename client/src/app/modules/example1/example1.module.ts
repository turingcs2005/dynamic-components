import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Example1RoutingModule } from './example1-routing.module';
import { Example1Component } from './example1.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    Example1Component,
    ChildComponent
  ],
  imports: [
    CommonModule,
    Example1RoutingModule,
    SharedModule
  ]
})
export class Example1Module { }
