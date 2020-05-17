import { Component, OnInit} from '@angular/core';
import { JwtService } from '../services/auth/jwt.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit  {
  
  constructor(
    private authService: JwtService
  ) {}
   ngOnInit(): void {
  }
  logout(){
    this.authService.logout();
  }

}
