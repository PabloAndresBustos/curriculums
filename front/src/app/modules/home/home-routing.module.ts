import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ExperiencesComponent } from '../crud-data/experiences/experiences.component';
import { FormationsComponent } from '../crud-data/formations/formations.component';
import { OptionalsComponent } from '../crud-data/optionals/optionals.component';
import { LanguageComponent } from '../crud-data/language/language.component';
import { SkillComponent } from '../crud-data/skill/skill.component';
<<<<<<< HEAD
import { PersonalComponent } from '../crud-data/personal/personal.component';
=======
import { ReferencesComponent } from '../crud-data/references/references.component';
>>>>>>> main

const routes: Routes = [
  {
    path: 'home/:id',
    component: HomeComponent
  },
  {
    path: 'personal',
    component: PersonalComponent
  },
  {
    path: 'experiencias',
    component: ExperiencesComponent
  },
  {
    path: 'referencias',
    component: ReferencesComponent
  },
  {
    path: 'formaciones',
    component: FormationsComponent
  },
  {
    path: 'opcionales',
    component: OptionalsComponent
  },
  {
    path: 'lenguajes',
    component: LanguageComponent
  },
  {
    path: 'habilidades',
    component: SkillComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class HomeRoutingModule { }
