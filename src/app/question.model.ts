// answer.model.ts
export interface Answer {
  text: string;
  correct: boolean;
}


export interface Question {
  question: string;
  answers: Answer[];
}


export interface Theme {
  name: string;
  questions: Question[];
}
