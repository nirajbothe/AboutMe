import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  EmailValidator,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  selectedForm = ''; // default
  reactiveForm: FormGroup;
  templateSubmitted = false;
  reactivesubmitted = false;
  templateContact = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  selectForm(type: 'template' | 'reactive') {
    this.selectedForm = type;
    this.templateSubmitted = false;
    this.reactiveForm.reset();
  }
  onTemplateSubmit() {
    this.templateSubmitted = true;
  }
  onReactiveSubmit() {
    if (this.reactiveForm.valid) {
      this.reactivesubmitted = true;
    }
  }
}
