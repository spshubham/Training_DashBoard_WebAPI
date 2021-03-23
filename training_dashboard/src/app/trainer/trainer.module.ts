import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog'

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TrainerDefaultComponent } from './trainer-default/trainer-default.component';
import { TrainerSidebarComponent } from './trainer-sidebar/trainer-sidebar.component';
import { MycalendarComponent } from './mycalendar/mycalendar.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TrainerProfileCardComponent } from './trainer-profile-card/trainer-profile-card.component';

FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    listPlugin,
    interactionPlugin
  ])


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

        FullCalendarModule,
        SweetAlert2Module
    ],
    exports: [],
    declarations: [
        TrainerDefaultComponent,
        TrainerSidebarComponent,
        MycalendarComponent,
        TrainerProfileCardComponent
    ],
    providers: [],
})
export class TrainerModule { }
