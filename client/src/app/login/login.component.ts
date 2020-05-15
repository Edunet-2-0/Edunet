import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  roles = [ 'Student', 'Teacher' ];
  // Form radio button is initially selected
  selectedRole = this.roles[0];
  // User data object that will be sent to server
  user = {
    email: '',
    password: '',
    role: ''
  };

  constructor() { }
  ngOnInit(): void {}

  onSelectionChange(role: string): void {
    this.selectedRole = role;
  }

  onSubmit(f: NgForm) {
    this.user.role = this.selectedRole;
    console.log(this.user);
  }
}
