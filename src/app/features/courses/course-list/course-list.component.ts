import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseModel } from '../courseModel';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @Input() courses!: CourseModel[];
  @Input() isEditable!: boolean;
  @Output() showCourseEvent = new EventEmitter<string>();
  @Output() editCourseEvent = new EventEmitter<string>();
  @Output() deleteCourseEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  showCourse(value: string) {
    this.showCourseEvent.emit(value);
  }
  
  editCourse(value: string) {
    this.editCourseEvent.emit(value);
  }
  
  deleteCourse(value: string) {
    this.deleteCourseEvent.emit(value);
  }
}
