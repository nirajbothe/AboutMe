import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
   skills = [
    { id: 1, name: 'Angular', Type :'FrontEnd' },
    { id: 2, name: 'TypeScript', Type :'FrontEnd'  },
    { id: 3, name: 'HTML & CSS',  Type :'FrontEnd' },
    { id: 4, name: 'JavaScript', Type :'FrontEnd'  },
    { id: 5, name: 'Redis', Type :'Backend'  },
    { id: 6, name: 'Kafka', Type :'Backend'  },
    { id: 7, name: '.Net', Type :'Backend'  },
    { id: 8, name: 'Asp.Net', Type :'Backend'  }
  ];
}
