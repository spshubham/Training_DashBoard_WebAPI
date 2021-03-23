import { NgModule } from '@angular/core';

import {UserDefaultComponent } from './user-default/user-default.component';

import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { RouterModule } from '@angular/router';
import { OngoingCoursesComponent } from './ongoing-courses/ongoing-courses.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { EnrollCourseService } from './enroll-course.service';
import { ViewCourseComponent } from './view-course/view-course.component';
import { MyAlertDialogComponent } from './my-alert-dialog/my-alert-dialog.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TrainerForUserComponent } from './trainer-for-user/trainer-for-user.component';



@NgModule({
    imports: [ 
        SharedModule,
        CommonModule,
        
        MatSidenavModule,
        MatDividerModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        MatMenuModule,
        MatListModule,
        RouterModule,
        AppRoutingModule,
        MatCardModule,
        MatDialogModule,  
        SweetAlert2Module,

    ],
    exports: [
        MatButtonModule, MatDialogModule
    ],
    declarations:[
        UserDefaultComponent,
        UserSidebarComponent,
        OngoingCoursesComponent,
        MyCoursesComponent,
        ViewCourseComponent,
        MyAlertDialogComponent,
        TrainerForUserComponent,
       
    ],
    entryComponents:[MyAlertDialogComponent],

    providers:[EnrollCourseService]

})
export class UserModule {

 }
