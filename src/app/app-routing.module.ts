// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/new', component: ProjectFormComponent },
  { path: 'projects/edit/:id', component: ProjectFormComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
