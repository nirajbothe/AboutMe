import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  hobbies: string[] = [
    '🚗 Long drives with music',
    '🎬 Movie nights with friends',
    '📍 Exploring new places',
    '🏏 Playing cricket on weekends',
  ];

  userThought: string = '';
  submitted: boolean = false;
  submitfunction() {
    if (this.userThought.trim().length > 0) {
      this.submitted = true;
    }
  }
}
