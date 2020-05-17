import { Component, OnInit} from '@angular/core';
import { JwtService } from '../services/auth/jwt.service';
import {SearchComponent} from '../search/search.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit  {
  val = '';
  constructor(
    private authService: JwtService
  ) {}
   ngOnInit(): void {
  }
  logout(){
    this.authService.logout();
  }

  handleSubmit() {
  }

  handleInput(event) {
    this.val = event.target.value;
    console.log(this.val)
  }

}
