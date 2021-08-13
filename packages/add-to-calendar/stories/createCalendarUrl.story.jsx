/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Story from '@lskjs/dev/Story';
import DEV from '@lskjs/dev/DEV';

// import AddToCalendar from './AddToCalendar';
import createCalendarUrl from './createCalendarUrl';
import downloadCalendar from './downloadCalendar';

const event = {
  title: 'Sample Event',
  description: 'This is the sample event provided as an example only',
  location: 'Portland, OR',
  start: '2020-02-20T20:20:20-04:00',
  finish: '2020-03-03T03:03:03+03:00',
};

const types = ['ics', 'google', 'yahoo', 'outlookcom'];
const urls = types.map((type) => ({
  type,
  url: createCalendarUrl(event, type),
}));

const onClick = (e) => {
  e.preventDefault();
  downloadCalendar(e.currentTarget.getAttribute('href'));
};

export default ({ storiesOf }) =>
  storiesOf('add-to-calendar/createCalendarUrl', module).add('Default', () => (
    <Story>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <pre>{JSON.stringify({ start: new Date(event.start), finish: new Date(event.finish) }, null, 2)}</pre>
      <table>
        {urls.map(({ type, url }) => (
          <tr>
            <th>{type}</th>
            <td>
              <a href={url} target="_blank">
                Download {type}
              </a>
            </td>
            <td>
              <button type="button" href={url} onClick={onClick} target="_blank">
                Download {type}
              </button>
            </td>
          </tr>
        ))}
      </table>
    </Story>
  ));
