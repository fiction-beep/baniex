// src/app/components/projects/projects.component.ts
import { Component, OnInit } from '@angular/core';
import { Project,responseData } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';




@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe((data) => {
      // this.projects = data;
      // this.projects = Array.isArray(data) ? data : [data];
      const myKey: string = 'content';
     this.projects = data.data ? data.data : [];

    });
  }

  deleteProject(id: number) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.projects = this.projects.filter(project => project.id !== id);
    });
  }
}
