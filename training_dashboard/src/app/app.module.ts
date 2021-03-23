import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** My Components */

import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { TrainerListComponent } from './modules/trainer-list/trainer-list.component';
import { FormsModule } from '@angular/forms';
import { DefaultModule } from './layouts/default/default.module';
import { SharedModule } from './shared/shared.module';
import { TrainerModule } from './trainer/trainer.module';
import { UserModule } from './user/user.module';

/**Services */
import { coursesDataService } from './modules/courses/courses-data.service';//---------------1
import { LoginService } from './modules/login/login.service';//------------------------------2
import { TrainersDataService } from './modules/trainer-list/trainers-data.service';//--------3
import { EnrollCourseService } from './user/enroll-course.service';//------------------------4

/** Material Components */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { PathnotfoundComponent } from './layouts/pathnotfound/pathnotfound.component';
import { TrainerAddComponent } from './modules/trainer-add/trainer-add.component';
import { CourseAddComponent } from './modules/course-add/course-add.component';
import { TrainerProfileComponent } from './modules/trainer-profile/trainer-profile.component';
import { CommonModule } from '@angular/common';
import { TrainerDetailsService } from './modules/trainer-profile/trainer-details.service';//------5 

import {HttpClientModule} from '@angular/common/http';
import { CourseEditComponent } from './modules/course-edit/course-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TrainerListComponent,
    PathnotfoundComponent,
    TrainerAddComponent,
    CourseAddComponent,
    CourseEditComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    
    DefaultModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    SharedModule,
    UserModule,
    TrainerModule,
    
    HttpClientModule//2
  ],
  providers: [coursesDataService, LoginService,EnrollCourseService,TrainersDataService,TrainerDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
