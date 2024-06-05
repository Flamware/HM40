import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-category-card',
  templateUrl: './question-category-card.component.html',
  standalone: true,
  styleUrls: ['./question-category-card.component.css']
})
export class QuestionCategoryCardComponent {
  @Input() categoryName: string = '';
  @Input() backgroundImage: string = '';

  constructor() {}
}
