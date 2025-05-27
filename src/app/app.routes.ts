import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
export const routes: Routes = [
     { path: '', redirectTo: 'home', pathMatch: 'full'  },
     { path: 'home', component: HomeComponent },     
     { path: 'about', component: AboutComponent },
     { path: 'skill', component: SkillsComponent },
     { path: 'contact', component: ContactComponent },
];
