import { Component, OnInit } from '@angular/core';
import { components } from './app-data/models';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrl: './example2.component.scss'
})
export class Example2Component implements OnInit {
  
  components: any[] = components;
 
  // Metadata come from a database. Here we hardcode them.
  componentData: any = [
    { 
      componentName: '_Child1Component',
      data: {
        name: 'Claire',
        gender: 'Female'
      }
    },

    { 
     componentName: '_Child2Component',
      data: {
        name: 'Ryan',
        school: 'Kennedy'
      }
    },

    { 
      componentName: '_Child3Component',
      data: {
        name: 'Sue',
        age: 12
      }
    },
  ]

  ngOnInit() {
    this.componentData.forEach( (x: any) => {
      x.component = this.components.filter(v => v.name === x.componentName)[0];
    });
  }

  displayComponentData() {
    console.log(this.componentData);
  }

}
