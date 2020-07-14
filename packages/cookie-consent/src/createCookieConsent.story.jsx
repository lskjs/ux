import React from 'react';
import Story from '@lskjs/dev/Story';
import createCookieConsent from './createCookieConsent';

const CookieNotificationView = ({ applyAll, accept }) => (
  <div>
    <button
      type="button"
      onClick={() => {
        accept({ google: true, facebook: false, amplitude: false, intercom: true, locale: true });
      }}
    >
      Accept
    </button>
    <button type="button" onClick={applyAll}>
      Apply All
    </button>
  </div>
);

const CookieNotification = createCookieConsent({
  view: CookieNotificationView,
  cookieName: 'cookie-consent',
  initialValues: {
    google: true,
    facebook: true,
    amplitude: true,
    intercom: true,
    locale: true,
  },
});

export default ({ storiesOf }) =>
  storiesOf('cookie-consent/createCookieConsent', module).add('code', () => (
    <Story>
      <CookieNotification />
    </Story>
  ));
