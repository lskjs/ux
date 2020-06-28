import moment from 'moment';
import isMobileBrowser from '@lskjs/utils/isMobileBrowser';
import toQs from '@lskjs/utils/toQs';
import isCrappyIEBrowser from '@lskjs/utils/isCrappyIEBrowser';

const getRandomId = () => {
  return `${new Date().getTime().toString()}_${Math.floor(Math.random() * 1000).toString()}`;
};

const formatTime = (date) => {
  const formattedDate = moment.utc(date).format('YYYYMMDDTHHmmssZ');
  return formattedDate.replace('+00:00', 'Z');
};

const calculateDuration = (startTime, finishTime) => {
  // snag parameters and format properly in UTC
  const start = moment.utc(startTime).format('DD/MM/YYYY HH:mm:ss');
  const end = moment.utc(finishTime).format('DD/MM/YYYY HH:mm:ss');

  // calculate the difference in milliseconds between the start and end times
  const difference = moment(end, 'DD/MM/YYYY HH:mm:ss').diff(moment(start, 'DD/MM/YYYY HH:mm:ss'));

  // convert difference from above to a proper momentJs duration object
  const duration = moment.duration(difference);

  return Math.floor(duration.asHours()) + moment.utc(difference).format(':mm');
};

export default (event, type) => {
  if (type === 'google') {
    return `https://calendar.google.com/calendar/render?${toQs({
      action: 'TEMPLATE',
      dates: `${formatTime(event.start)}/${formatTime(event.finish)}`,
      location: encodeURIComponent(event.location),
      text: encodeURIComponent(event.title),
      details: encodeURIComponent(event.description),
    })}`;
  }
  if (type === 'yahoo') {
    // yahoo doesn't utilize finish so we need to calulate duration
    return `https://calendar.yahoo.com?${toQs({
      v: 60,
      view: 'd',
      type: 20,
      title: encodeURIComponent(event.title),
      st: formatTime(event.start),
      dur: calculateDuration(event.start, event.finish),
      desc: encodeURIComponent(event.description),
      in_loc: encodeURIComponent(event.location),
    })}`;
  }
  if (type === 'outlookcom') {
    return `https://outlook.live.com/owa/?${toQs({
      rru: 'addevent',
      startdt: formatTime(event.start),
      enddt: formatTime(event.finish),
      subject: encodeURIComponent(event.title),
      location: encodeURIComponent(event.location),
      body: encodeURIComponent(event.description),
      allday: 'false',
      uid: getRandomId(),
      path: '/calendar/view/Month',
    })}`;
  }
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `URL:${event.url}`,
    `DTSTART:${formatTime(event.start)}`,
    `DTEND:${formatTime(event.finish)}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  if (isMobileBrowser() && !isCrappyIEBrowser()) {
    return encodeURI(`data:text/calendar;charset=utf8,${ics.join('\n')}`);
  }
  return `${ics.join('\n')}`;
};
