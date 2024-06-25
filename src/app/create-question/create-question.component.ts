import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgClass,
    NgIf
  ],
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent {
  selectedCategory: string = ''; // Initialize with an empty string
  categories: string[] = ['Category 1', 'Category 2', 'Category 3'];

  newQuestion: string = '';
  newQuestionOptions: string[] = ['', '', '', ''];
  correctAnswer: string = '';

  constructor() {}

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  addQuestion() {
    // Implement your addQuestion logic here
  }

  isAnswerCorrect(answerIndex: number): boolean {
    // Implement your isAnswerCorrect logic here
    return answerIndex === 0 && this.newQuestionOptions[answerIndex] === this.correctAnswer;
  }
}
