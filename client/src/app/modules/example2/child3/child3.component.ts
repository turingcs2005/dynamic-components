import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.scss'
})
export class Child3Component {
  @Input() name: string = '';
  @Input() age: number = 0;
}
