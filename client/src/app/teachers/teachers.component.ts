/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const serverURL = 'http://localhost:8080/teachers';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
  teachers = [] as any;

  constructor(private http: HttpClient) {

  }
  fetchData(){
    return this.http.get(serverURL).subscribe(
      (data) => {
        this.teachers = data;
      });
  }
  ngOnInit(): void {
    this.fetchData();
  }
}
