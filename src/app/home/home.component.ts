import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,HeaderComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  skills: string[] = [
    '🔧 Backend Development (.NET Core, ASP.NET)',
    '⚡ Real-time Systems with Kafka & Redis',
    '📡 CRM Integration',
    '💾 SQL Server & Scalable Data',
    '🚀 Clean Architecture & Optimization',
    '🛠️ Workflow Automation'
  ];
}