import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
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
}
