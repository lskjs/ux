import React from 'react';
import Story from '@lskjs/dev/Story';
import MediaQuery from './MediaQuery';

export default ({ storiesOf }) => (
  storiesOf('ui/MediaQuery', module)
    .add('default', () => (
      <Story>
        <div>
          <i>{'Visible only < 1200px '}</i>
          <MediaQuery
            match={{
              maxWidth: 1200,
            }}
          >
            <b>I'AM HERE!!</b>
          </MediaQuery>
        </div>
        <hr />
        <div>
          <i>{'Visible only > 800px '}</i>
          <MediaQuery
            match={{
              minWidth: 800,
            }}
          >
            <b>I'AM HERE!!</b>
          </MediaQuery>
        </div>
        <hr />
        <div>
          <i>{'Visible < 1200px and > 600px '}</i>
          <MediaQuery
            match={{
              maxWidth: 1200,
              minWidth: 600,
            }}
          >
            <b>I'AM HERE!!</b>
          </MediaQuery>
        </div>
        <hr />
        <div>
          <i>{'Visible only < 600 and only orientation landscape '}</i>
          <MediaQuery
            match={{
              maxWidth: 600,
              orientation: 'landscape',
            }}
          >
            <b>I'AM HERE!! WOW!!</b>
          </MediaQuery>
        </div>
      </Story>
    ))
);
