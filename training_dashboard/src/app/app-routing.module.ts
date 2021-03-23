import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { coursesComponent } from './modules/courses/courses.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { TrainerListComponent } from './modules/trainer-list/trainer-list.component';
import { ContactusComponent } from './shared/contactus/contactus.component';
import { TrainerDefaultComponent } from './trainer/trainer-default/trainer-default.component';
import { MyCoursesComponent } from './user/my-courses/my-courses.component';
import { OngoingCoursesComponent } from './user/ongoing-courses/ongoing-courses.component';
import { UserDefaultComponent } from './user/user-default/user-default.component';
import { ViewCourseComponent } from './user/view-course/view-course.component';
import { MycalendarComponent } from './trainer/mycalendar/mycalendar.component';
import { MeetingsComponent } from './modules/meetings/meetings.component';
import { PathnotfoundComponent } from './layouts/pathnotfound/pathnotfound.component';
import { TrainerProfileComponent } from './modules/trainer-profile/trainer-profile.component';
import { TrainerForUserComponent } from './user/trainer-for-user/trainer-for-user.component';
import { TrainerProfileCardComponent } from './trainer/trainer-profile-card/trainer-profile-card.component';



const routes: Routes = [
  {
    path: '',
    component : LoginComponent,
  },
  {
    path:'register',
    component: RegisterComponent,
  },
  {
    path: 'default',
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }, 
      {
        path: 'courses',
        component: coursesComponent
      },
      {
        path: 'trainers',
        component: TrainerListComponent,
        children:[
          
        ]
      },
      {
        path: 'meetings',
        component: MeetingsComponent
      },
      {
        path: 'trainerprofile',
        component: TrainerProfileComponent
      },
      
    ]
  },

  {
    path: 'userdefault',
    component:UserDefaultComponent,
    pathMatch: 'prefix',
    children: [
      {
        path : "ongoingCourses",
        component: OngoingCoursesComponent,
      },
      {
        path: "mycourses",
        component: MyCoursesComponent,
        children:[
          {
            path: 'view',
            component: ViewCourseComponent,
          },
        ]
      },
      {
        path: 'trainerforuser',
        component: TrainerForUserComponent
      },
      {
        path:'contactus',
        component: ContactusComponent,
      },
    
    ]
  },

  {
    path: 'trainer',
    component:TrainerDefaultComponent,
    children:[
     {
      path: 'mycalendar',
      component: MycalendarComponent
     },
     {
       path: 'trainermyprofile',
       component : TrainerProfileCardComponent
     } 
    ]
  },

  {
    path: '**',
    component: PathnotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
