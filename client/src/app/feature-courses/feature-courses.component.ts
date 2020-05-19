import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8080/courses';
@Component({
  selector: 'app-feature-courses',
  templateUrl: './feature-courses.component.html',
  styleUrls: ['./feature-courses.component.scss']
})
export class FeatureCoursesComponent implements OnInit {
  courses = [] as any;
  
  constructor(private http : HttpClient) { }

  featureCourses (){
    return this.http.get(baseUrl).subscribe((data) => {
      this.courses = data;
    });
  }
  ngOnInit(): void {
    this.featureCourses();
  }

}
