/* tslint:disable:semicolon whitespace */
import {Component, OnInit, OnChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

const serverUrl = `http://localhost:8080/courses`;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  data = [] as any;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute,) { }
  search(value){
    return this.http.get(serverUrl).subscribe(
      (data) =>{
        console.log(data);
        this.data = JSON.parse(JSON.stringify(data)).filter((element) =>{
          return element.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
        });
        console.log(this.data)
      }
    )
  };


  ngOnInit(): void {
    const value = this.activatedRoute.snapshot.params.val;
    console.log(value);
    this.search(value);
  }
}
