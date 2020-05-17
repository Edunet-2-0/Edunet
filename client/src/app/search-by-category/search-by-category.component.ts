import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {from} from 'rxjs';

@Component({
  selector: 'app-search-by-category',
  templateUrl: './search-by-category.component.html',
  styleUrls: ['./search-by-category.component.scss'],
})
export class SearchByCategoryComponent implements OnInit {
  selectedCategory = [] as any;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
  }

  getByCategory(name) {
    this.http
      .get(`http://localhost:8080/category/${name}`)
      .subscribe((result) => {
        this.selectedCategory = result;
        console.log('category', result);
      });
  }

  ngOnInit(): void {
    const name = this.activatedRoute.snapshot.params.name;
    this.getByCategory(name);
  }
}
