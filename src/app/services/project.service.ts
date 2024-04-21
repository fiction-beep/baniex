// src/app/services/project.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project, responseData } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'https://test.noamananwaar.com/api/ProjectMaster/';

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<responseData> {
    return this.http.get<responseData>(`${this.apiUrl}GetAllProjectMaster`);
  }

  getProjectById(id: number): Observable<responseData> {
    return this.http.get<responseData>(`${this.apiUrl}GetProjectMasterById?Id=${id}`);
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiUrl}AddProjectMaster`, project);
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}UpdateProjectMaster`, project);
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}DeleteProjectMaster?id=${id}`);
  }
}
