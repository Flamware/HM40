import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserBarComponent} from "./user-bar/user-bar.component";
import {QuestionCategoryCardComponent} from "./question-category-card/question-category-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserBarComponent, QuestionCategoryCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HM40';
}
