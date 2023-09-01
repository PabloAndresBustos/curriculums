import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './modules/usuario/registro/registro.component';
import { LoginComponent } from './modules/usuario/login/login.component';
import { ExperiencesComponent } from './modules/crud-data/experiences/experiences.component';
import { FormationsComponent } from './modules/crud-data/formations/formations.component';
import { OptionalsComponent } from './modules/crud-data/optionals/optionals.component';
import { HomeComponent } from './modules/home/home.component';
import { LanguageComponent } from './modules/crud-data/language/language.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'experiencias',
    component: ExperiencesComponent    
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
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'lenguajes',
    component: LanguageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
