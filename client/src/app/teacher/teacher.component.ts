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
  /*filter: any;
  val = '';*/
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}
  fetchData(id){
    return this.http.get(`http://localhost:8080/teachers/${id}`).subscribe(
      (data) => {
        this.data = data;
      });
  }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.fetchData(id);
  }
  /*handleInput(event) {
    this.val = event.target.value;
    }
  Search(value) {
    console.log(value);
    this.filter = JSON.parse(JSON.stringify(this.data.course)).filter((element) => {
      return element.title.toLowerCase().indexOf(this.val.toLowerCase()) !== -1;
    });
    console.log(this.filter);
  }*/
}