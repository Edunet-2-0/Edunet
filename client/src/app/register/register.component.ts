import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JwtService } from '../services/auth/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  roles = [ 'Student', 'Teacher' ];
  // Form radio Student button is initially selected
  selectedRole = this.roles[0];
  // New user data object that will be sent to server
  newUser = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    phone: null,
    role: null,
    teacherPosition: null,
    affiliatedUniversity: null
  };
  constructor(
    private router: Router,
    private authService: JwtService
  ) { }
  ngOnInit(): void {
  }
  onSelectionChange(role): void {
    this.selectedRole = role;
  }
  onSubmit(f: NgForm): void {
    this.newUser.role = this.selectedRole;
    console.log(this.newUser);
    this.authService.register(this.newUser)
    .subscribe((res: any) => {
      console.log('Signup successful');
      // Save JWT access token to the browser's storage
      localStorage.setItem('token', res.token);
      // Upon successful res, direct user to home page
      // this.currentUser = res;
      this.router.navigate(['']);
    })
  }
}
