import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  constructor() { }
  ngOnInit(): void {
  }
  onSelectionChange(role): void {
    this.selectedRole = role;
  }
  onSubmit(f: NgForm): void {
    this.newUser.role = this.selectedRole;
    console.log(this.newUser);
  }
}
