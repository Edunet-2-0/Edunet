import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

const baseUrl = 'http://localhost:8080/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [] as any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRote: ActivatedRoute
  ) {}

  getAllCourses() {
    return this.http.get(baseUrl).subscribe((data) => {
      this.courses = data;
    });
  }
  ngOnInit(): void {
    this.getAllCourses();
  }
}
