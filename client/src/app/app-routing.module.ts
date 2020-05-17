import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Protected API urls' guard
import { AuthGuard } from './helpers/auth/auth.guard'; // TODO : add guards

import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import {TeachersComponent} from './teachers/teachers.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormComponent} from './form/form.component';
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
{path : 'search/:value', component: SearchComponent},
{path : 'auth/login', component: LoginComponent},
{path : 'auth/signup', component: RegisterComponent},
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) } 

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
