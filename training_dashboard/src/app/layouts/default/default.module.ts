import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { coursesComponent } from 'src/app/modules/courses/courses.component';
import { LoginComponent } from '../../modules/login/login.component';
import { FormsModule } from '@angular/forms';

//Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from  '@angular/material/table';
import { MeetingsComponent } from 'src/app/modules/meetings/meetings.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

//Fullcalendar Modules
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { TrainerProfileComponent } from '../../modules/trainer-profile/trainer-profile.component';

 
FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    coursesComponent,
    MeetingsComponent,
    TrainerProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CommonModule,

    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    
    FullCalendarModule,
    SweetAlert2Module
  ],
  providers: [
    DashboardService,
    
  ]
})
export class DefaultModule { }
