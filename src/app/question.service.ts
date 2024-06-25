import { Injectable } from '@angular/core';
import questionsData from './assets/questions.json'; // Import the JSON file
import { Question, Theme } from './question.model'; // Import the interface

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  public themes: Theme[]; // Store the imported themes

  constructor() {
    this.themes = questionsData.themes; // Access the themes data from the imported JSON
  }

  getThemes(): Theme[] {
    // No need for HttpClient or Observables here, directly return themes
    return this.themes;
  }

  getQuestionsByTheme(theme: Theme): Question[] {
    const selectedTheme = this.themes.find((t: Theme) => t.name === theme.name);
    return selectedTheme ? selectedTheme.questions : [];
  }
}
