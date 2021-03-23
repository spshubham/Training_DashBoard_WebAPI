import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import Swal from 'sweetalert2';
import { INITIAL_EVENTS, createEventId } from './meeting-utils';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    /* select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this), */
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  /* handleDateSelect(selectInfo: DateSelectArg) { */
    /* const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    } */
    
    /* Swal.fire({
      title: "Add New Event",
      input: 'text',
      inputPlaceholder:'Enter Event name',
      showCancelButton: true        
    }).then((result) => {
          if (result.value) 
          {
            console.log("Result: " + result.value);
            const title = result.value
            const calendarApi = selectInfo.view.calendar;
            calendarApi.unselect(); // clear date selection
            if(title)
            {
              calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
              });

              Swal.fire('Event Added','','success')
            }
          }
    });
  } */

  /* handleEventClick(clickInfo: EventClickArg) { */
    /* if (alert(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    } */
    /* Swal.fire({
      title: 'Are you sure you want to delete this event?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', '', 'success')
        clickInfo.event.remove();
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  } */

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
