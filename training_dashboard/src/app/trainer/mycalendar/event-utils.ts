import { EventInput } from '@fullcalendar/angular';
import { reduce } from 'highcharts';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
/* const event = new Date('05 December 2020 14:00 UTC') */

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Angular Training',
    start: '2021-01-13',
    end: '2021-01-16',
    color: '#db3537'
  },
  {
    id: createEventId(),
    title: 'React Training',
    start: '2021-01-24',
    end: '2021-01-26',
    color: '#db3537'
  },
  {
    id: createEventId(),
    title: 'Angular Advance Topics',
    start: '2021-01-28',
    end: '2021-01-30',
    color: '#e6a837'
  },
  {
    id: createEventId(),
    title: 'Github Session',
    start: TODAY_STR + 'T09:00:00',
    end: TODAY_STR + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'Sync-Up Meeting',
    start: TODAY_STR + 'T14:00:00',
    end: TODAY_STR + 'T15:00:00'
  }

];

export function createEventId() {
  return String(eventGuid++);
}
