import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import {QuizComponent} from "./quiz-component/quiz.component";
import {CreateQuestionComponent} from "./create-question/create-question.component";
export const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'login', component: LoginComponent},
  { path: 'ecrire', component: CreateQuestionComponent},
  { path: 'jouer', component: QuizComponent},
  { path: '', redirectTo: '/profile', pathMatch: 'full' }, // Redirect to Profile as default
  { path: '**', redirectTo: '/profile' } // Wildcard route for handling unknown paths
];
