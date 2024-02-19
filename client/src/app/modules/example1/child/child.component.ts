import { Component, Input } from '@angular/core';
import { MathCompetitor } from '../app-data/models';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() competitor: MathCompetitor = new MathCompetitor();
}
