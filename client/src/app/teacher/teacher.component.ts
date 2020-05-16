import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
/*
const serverURL = `http://localhost:8080/teachers/${id}`;
*/

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}

  fetchData(id){
    return this.http.get(`http://localhost:8080/teachers/${id}`).subscribe(
      (data) => {
        console.log(data);
        this.data = data;
        console.log('this', this.data);
      });
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.fetchData(id);
  }

}
