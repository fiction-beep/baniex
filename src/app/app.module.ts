// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    ProjectFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    InputTextModule,
    CardModule, // Import Card module here
    ButtonModule
     // Import the MatToolbarModule heres -o


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
