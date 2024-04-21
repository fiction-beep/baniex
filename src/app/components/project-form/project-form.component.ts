import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Project, responseData } from '../../models/project.model';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  projectForm: FormGroup;
  projectId: number | null = null;
  submitButtonLabel: string;  // Property to hold the label for the submit button

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    
    this.projectForm = this.fb.group({
      projectName: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required]
    });
    this.submitButtonLabel = 'Add Project'; // Default label
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.projectId = +id;
      this.loadProject(this.projectId);
      this.submitButtonLabel = 'Update Project'; // Change label for editing
    }
  }

  private loadProject(id: number) {
    this.projectService.getProjectById(id).subscribe({
      next: (response: responseData) => {
        if (response.success && response.data && response.data.length > 0) {
          this.projectForm.patchValue(response.data[0]);
        } else {
          alert('No project data available or project loading failed.');
        }
      },
      error: () => alert('Error loading project')
    });
  }
  
  onSubmit() {
    if (this.projectForm.valid) {
      const project: Project = this.projectForm.value as Project;
      if (this.projectId !== null) {
        project.id = this.projectId;
        this.updateProject(project);
      } else {
        this.addProject(project);
      }
    }
  }

  private addProject(project: Project) {
    this.projectService.addProject(project).subscribe({
      next: () => this.router.navigate(['/projects']),
      error: () => alert('Error adding project')
    });
  }

  private updateProject(project: Project) {
    this.projectService.updateProject(project).subscribe({
      next: () => this.router.navigate(['/projects']),
      error: () => alert('Error updating project')
    });
  }
}
