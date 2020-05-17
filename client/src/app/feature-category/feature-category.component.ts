import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from} from 'rxjs';

let serverUrl = 'http://localhost:8080/category';

@Component({
  selector: 'app-feature-category',
  templateUrl: './feature-category.component.html',
  styleUrls: ['./feature-category.component.scss'],
})
export class FeatureCategoryComponent implements OnInit {
  categories = <any>[];

  constructor(private http: HttpClient) {
  }

  getCategories() {
    this.http.get(serverUrl).subscribe((result) => {
      this.categories = result;
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
