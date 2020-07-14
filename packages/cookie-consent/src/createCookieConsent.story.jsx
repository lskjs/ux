import React from 'react';
import Story from '@lskjs/dev/Story';
import createCookieConsent from './createCookieConsent';

const CookieNotificationView = ({ acceptAll, setCustom, rejectAll }) => (
  <div>
    <button
      type="button"
      onClick={() => {
        setCustom({ google: true, facebook: false, amplitude: false, intercom: true, locale: true });
      }}
    >
      Accept
    </button>
    <button type="button" onClick={rejectAll}>
      Reject All
    </button>
    <button type="button" onClick={acceptAll}>
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
