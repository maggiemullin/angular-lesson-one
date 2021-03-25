
import { Component, OnInit } from '@angular/core';

// create an in-memory model class of a project to mock up some data
export class Project {
  id: number | undefined;
  name: string | undefined;
  course: string | undefined;
}

// create mock list of projects
const PROJECTS: Project[] = [
  { id: 101, name: 'Lab 2', course: 'COMP2106' },
  { id: 102, name: 'Quiz 3', course: 'COMP2106' },
  { id: 103, name: 'Tutorial', course: 'COMP2106' },
  { id: 104, name: 'Assignment 2', course: 'COMP2106'}
]


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  // create an in-memory project for display
  /*project: Project = {
    id: 1,
    name: 'Lab 2',
    course: 'COMP2106'
  };*/
  // make mock data available to html view
  projects = PROJECTS;
  selectedProject: Project; // used to show a project in the form
  // select the project the user clicked on
  onSelect(project: Project): void {
    this.selectedProject = project;
  }

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
