import {Component, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserBarComponent} from "./user-bar/user-bar.component";
import {QuestionCategoryCardComponent} from "./question-category-card/question-category-card.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ExpBarComponent} from "./expbar/expbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserBarComponent, QuestionCategoryCardComponent, ExpBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'HM40';
}
