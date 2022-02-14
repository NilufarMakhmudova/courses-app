import { Component, Input, OnInit } from '@angular/core';
import { CourseModel } from '../courseModel';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() course!:CourseModel;

  durationDate!: Date;
  constructor() { }

  ngOnInit(): void {
    this.durationDate = new Date(1970, 1, 1, 0, this.course.duration);
  }

}
