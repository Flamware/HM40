import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  pseudo: string ='test';
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      pseudo: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      pseudo: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      role: ['', Validators.required],
      niveau: [''],
      matiere: [''],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      classNumber: [''],
      classCourse: ['']
    });
  }

  onSubmitLogin() {
    // Handle login form submission logic here
    console.log(this.loginForm.value);
  }

  onSubmitRegister() {
    // Handle register form submission logic here
    console.log(this.registerForm.value);
  }
}
