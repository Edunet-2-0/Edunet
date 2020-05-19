import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { CoursesComponent } from '../courses/courses.component';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}
  key = 'hello';
  role = 'student';
  exist = false;
  owner = false;
  data = {teacher :
      {first_name: 'Mohamed',
        last_name: 'Zemzemi',
        email : 'zemzmi@gmail.com',
        photo : 'https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png'},
    course : {title : 'introduction to java', description: 'hello world welcome to java', photo: 'https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png'},
    videos: {url : '', description : '', title : ''}
  };
  course = [] as any;
  videos = [] as any;
  enroll(){}
  handleSubmit(){}
  handleInput(){}
  getCourse(id) {
    return this.http.get<any>(`http://localhost:8080/courses/${id}`);
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.getCourse(id).subscribe(
      (result) => {
        console.log('ress', result);
        this.course = result;
        this.videos = result.video;
        // this.transform(result.video[0].url);
      },
      (error) => {
        console.log('error fetching course', error);
      }
    );
  }
}