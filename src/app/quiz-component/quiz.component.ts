import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question, Theme, Answer } from '../question.model';
import { NgClass, NgForOf, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ExpBarComponent } from "../expbar/expbar.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    NgForOf,
    FormsModule,
    ExpBarComponent,
    RouterOutlet
  ],
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  themes: Theme[] = [];
  selectedTheme: Theme | null = null;
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  selectedAnswer: Answer | null = null;
  isCorrect: boolean | null = null;
  currentExp: number = 0;
  maxExp: number = 100;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.loadThemes();
  }

  loadThemes(): void {
    this.themes = this.questionService.getThemes();
    if (this.themes.length > 0) {
      this.selectedTheme = this.themes[0];
      this.loadQuestions(this.selectedTheme);
    }
  }

  selectTheme(theme: Theme): void {
    this.selectedTheme = theme;
    this.loadQuestions(theme);
  }

  loadQuestions(theme: Theme): void {
    this.questions = this.questionService.getQuestionsByTheme(theme);
    this.questions.forEach(question => {
      this.shuffleAnswers(question.answers);
    });
    this.resetQuiz();
  }

  shuffleAnswers(answers: Answer[]): void {
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
  }

  selectAnswer(answer: Answer): void {
    this.selectedAnswer = answer;
  }

  checkAnswer(): void {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    const correctAnswer = currentQuestion.answers.find(answer => answer.correct);

    if (!this.selectedAnswer) {
      return;
    }

    this.isCorrect = this.selectedAnswer.text === correctAnswer?.text;
    if (this.isCorrect) {
      this.updateExp(this.currentExp + 3);
    }
    const labels = document.querySelectorAll('.answer-option label') as NodeListOf<HTMLElement>;

    labels.forEach(label => {
      label.className = '';
      const answerText = label.textContent?.trim();

      if (answerText === correctAnswer?.text) {
        label.classList.add('correct');
      } else if (answerText === this.selectedAnswer?.text) {
        if (!this.isCorrect) {
          label.classList.add('incorrect', 'wrong');
        }
      } else {
        label.classList.add('wrong');
      }
    });
  }

  nextQuestion(): void {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex === this.questions.length) {
      alert('Félicitations ! Vous avez terminé le quiz avec succès.');
      this.resetQuiz();
    } else {
      this.selectedAnswer = null;
      this.isCorrect = null;
      this.clearAnswerClasses();
    }
  }

  resetQuiz(): void {
    this.currentQuestionIndex = 0;
    this.selectedAnswer = null;
    this.isCorrect = null;
    this.clearAnswerClasses();
    this.currentExp = 0;
  }

  clearAnswerClasses(): void {
    const labels = document.querySelectorAll('.answer-option label') as NodeListOf<HTMLElement>;
    labels.forEach(label => {
      label.classList.remove('correct', 'incorrect', 'wrong');
    });
  }

  updateExp(newExp: number): void {
    this.currentExp = newExp;
  }
}
