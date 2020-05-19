import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  ChatService } from './chat.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HttpClientModule } from '@angular/common/http';
// Importing Material Design Library
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SearchByCategoryComponent } from './search-by-category/search-by-category.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherComponent } from './teacher/teacher.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { FeatureCategoryComponent } from './feature-category/feature-category.component';
import { FeatureChooseComponent } from './feature-choose/feature-choose.component';
import { FeatureCoursesComponent } from './feature-courses/feature-courses.component';
import { FormComponent } from './form/form.component';
import { FeatureTeachersComponent } from './feature-teachers/feature-teachers.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { StudentLogComponent } from './student-log/student-log.component';
import { TeacherLogComponent } from './teacher-log/teacher-log.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { FooterComponent } from './footer/footer.component';

const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    SearchComponent,
    SearchByCategoryComponent,
    TeachersComponent,
    TeacherComponent,
    CoursesComponent,
    CourseComponent,
    FeatureCategoryComponent,
    FeatureChooseComponent,
    FeatureCoursesComponent,
    FormComponent,
    FeatureTeachersComponent,
    CreateCourseComponent,
    StudentLogComponent,
    TeacherLogComponent,
    DashboardComponent,
    ChatComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],

  providers: [ChatService],
  bootstrap: [AppComponent],
})

export class AppModule {}
