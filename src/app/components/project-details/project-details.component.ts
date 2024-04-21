// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Project } from '../../models/project.model';
// import { ProjectService } from '../../services/project.service';
// import { Location } from '@angular/common'; 
// @Component({
//   selector: 'app-project-details',
//   templateUrl: './project-details.component.html',
//   styleUrls: ['./project-details.component.css']
// })
// export class ProjectDetailsComponent implements OnInit {
//   // Initialize project as undefined to handle the possibility it might not get immediately assigned
//   project?: any; 
//   projectName:string | undefined;

//   constructor(
//     private projectService: ProjectService,
//     private route: ActivatedRoute,
//     private location: Location 
//   ) { }

//   ngOnInit() {
//     this.getProject();
//   }

//   // getProject() {
//   //   // Using + to coerce the string to a number; if null or undefined, default to 0 or another placeholder ID
//   //   const id = +this.route.snapshot.paramMap.get('id')!;
//   //   if (id) {
//   //     this.projectService.getProjectById(id).subscribe(project => {
//   //       this.project = project;
//   //     }, error => {
//   //       console.error('Error fetching project:', error);
//   //       // Optionally handle error state, perhaps assign default or navigate away
//   //     });
//   //   } else {
//   //     console.error('Invalid project ID');
//   //     // Handle invalid or missing ID appropriately
//   //   }
//   // }
//   getProject() {
//     const id = +this.route.snapshot.paramMap.get('id')!;
//     if (id) {
//       this.projectService.getProjectById(id).subscribe((data) => {
//           // this.project = project;
          
//       // this.projectName=project.projectName;
//       const myKey: string = 'content';
//       this.project = data.data ? data.data : [];
        
//       });
//     } else {
//       console.error('Invalid project ID');
//       // Handle invalid or missing ID appropriately
//     }
//   }
//   goBack() {
//     this.location.back(); // Use Location service to navigate back
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project, responseData } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project?: Project;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location 
  ) { }

  ngOnInit() {
    this.getProject();
  }

  getProject() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.projectService.getProjectById(id).subscribe({
        next: (response: responseData) => {  // Correctly typing as responseData
          if (response.success && response.data && response.data.length > 0) {
            this.project = response.data[0];  // Assuming the first project is what you want
          } else {
            console.error('No project data available');
          }
        },
        error: (error) => {
          console.error('Error fetching project:', error);
        }
      });
    } else {
      console.error('Invalid project ID');
    }
  }

  goBack() {
    this.location.back();
  }
}

