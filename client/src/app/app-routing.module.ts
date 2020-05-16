import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import {TeachersComponent} from './teachers/teachers.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormComponent} from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {TeacherComponent} from './teacher/teacher.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
{path : '', component : HomeComponent},
{path : 'courses/:id' , component : CourseComponent},
{path : 'teachers' , component : TeachersComponent},
{path : 'teachers/:id' , component : TeacherComponent},
{path : 'courses' , component : CoursesComponent },
{path : 'login' , component : LoginComponent},
{path : 'register' , component : RegisterComponent},
{path : 'form' , component : FormComponent},
{path : 'admin',  component : DashboardComponent },
{path: 'search/:value', component: SearchComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
