import { Component } from '@angular/core';
import { MathCompetitor, competitors } from './app-data/models';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.scss'
})
export class Example1Component {
  ChildComponent = ChildComponent;
  competitors: MathCompetitor[] = competitors;

  sortByGrade() {
    this.competitors.sort( (a, b) => a.grade - b.grade);
  }

  changeStudentName() {
    this.competitors[2].name = "Josh";
  }
}
