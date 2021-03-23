import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
/* const event = new Date('05 December 2020 14:00 UTC') */

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Blockchain Training by Pallavi Jog',
    start: '2021-01-04',
    end: '2021-01-15',
    color: '#4ebaaf'
  },
  {
    id: createEventId(),
    title: 'Azure Training by Sameera Deo',
    start: '2021-01-05',
    end: '2021-01-16',
    color: '#32a854'
  },
  {
    id: createEventId(),
    title: 'React Training by Bharti Thorat',
    start: '2021-01-01',
    end: '2021-01-12',
    color: '#db3537'
  },
  {
    id: createEventId(),
    title: 'Angular Training by Mukta Peshave',
    start: '2021-01-04',
    end: '2021-01-18',
    color: '#f08624'
  },
  {
    id: createEventId(),
    title: 'Java Training by Kedar Tokekar',
    start: '2021-01-10',
    end: '2021-01-25',
    color: '#eddd47'
  },
  {
    id: createEventId(),
    title: 'Github Session by Subrahmanayam',
    start: TODAY_STR + 'T09:00:00',
    end: TODAY_STR + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'Sync-Up Meeting by Devraj',
    start: TODAY_STR + 'T14:00:00',
    end: TODAY_STR + 'T15:00:00'
  },
  {
    id: createEventId(),
    title: 'Project Demo by Subrahmanyam',
    start: '2020-12-29T11:00:00',
    end: '2020-12-29T15:00:00'
  }

];

export function createEventId() {
  return String(eventGuid++);
}
