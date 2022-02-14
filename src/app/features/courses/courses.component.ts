import { Component, OnInit } from '@angular/core';
import { CourseModel } from './courseModel';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  coursesList: CourseModel[] = [
    {
      title: "Angular", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper erat eget mauris fermentum pharetra at ac sapien. Cras vel libero velit. Curabitur hendrerit ut sem id dapibus. Morbi placerat dolor elit, eu viverra est commodo a. Suspendisse sollicitudin arcu eu libero luctus, quis ullamcorper nunc sodales. Phasellus sit amet lectus et dui lobortis bibendum eu facilisis justo. Praesent eget auctor neque, et ultricies nisl. Ut scelerisque non nunc vitae porta. Morbi tempus fermentum imperdiet.",
      authors: ["Dave Haisenberg", "Tony Ja"],
      duration: 121,
      creationDate: new Date(2012, 3, 20)
    },
    {
      title: "TypeScript", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper erat eget mauris fermentum pharetra at ac sapien. Cras vel libero velit. Curabitur hendrerit ut sem id dapibus. Morbi placerat dolor elit, eu viverra est commodo a. Suspendisse sollicitudin arcu eu libero luctus, quis ullamcorper nunc sodales. Phasellus sit amet lectus et dui lobortis bibendum eu facilisis justo. Praesent eget auctor neque, et ultricies nisl. Ut scelerisque non nunc vitae porta. Morbi tempus fermentum imperdiet.",
      authors: ["Dave Haisenberg", "Tony Ja"],
      duration: 90,
      creationDate: new Date(2015, 4, 16)
    }  
  ]
  constructor() { }

  ngOnInit(): void {
  }

  showCourse(value: string) {
    alert("Showing course " + value);
  }
  
  editCourse(value: string) {
    alert("Editing course " + value);
  }
  
  deleteCourse(value: string) {
    alert("Deleting course " + value);
  }
}
