import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Protected API urls' guard
import { AuthGuard } from './helpers/auth/auth.guard'; // TODO : add guards

import {HomeComponent} from './home/home.component';
import {CoursesComponent} from './courses/courses.component';
import {CourseComponent} from './course/course.component';
import {TeachersComponent} from './teachers/teachers.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormComponent} from './form/form.component';
import {TeacherComponent} from './teacher/teacher.component';
import {SearchComponent} from './search/search.component';
import {FeatureCategoryComponent} from './feature-category/feature-category.component';

import {SearchByCategoryComponent} from './search-by-category/search-by-category.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'courses/:id', component: CourseComponent, canActivate: [AuthGuard]},
  {path: 'teachers', component: TeachersComponent, canActivate: [AuthGuard]},
  {path: 'teachers/:id', component: TeacherComponent, canActivate: [AuthGuard]},
  {path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'form', component: FormComponent, canActivate: [AuthGuard]},
  {path: 'search/:val', component: SearchComponent, canActivate: [AuthGuard]},
  {path: 'category', component: FeatureCategoryComponent, canActivate: [AuthGuard]},
  {path: 'category/:name', component: SearchByCategoryComponent, canActivate: [AuthGuard]},
  {path : 'auth/login', component: LoginComponent},
  {path : 'auth/signup', component: RegisterComponent},
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
