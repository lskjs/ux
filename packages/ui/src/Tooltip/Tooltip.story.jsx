import React from 'react';
import Typography from '../Typography2';
import Story from '../Story';
import Tooltip from './Tooltip';

export default ({ storiesOf }) => {
  storiesOf('Tooltip', module)
    .add('Default', () => (
      <Story>
        <Tooltip id="1" overlay="This is tooltip" noStyle>
          <Typography view="huge-3">Tooltip</Typography>
        </Tooltip>
      </Story>
    ))
    .add('Place', () => (
      <Story>
        <div style={{ display: 'inline-block', flexDirection: 'column' }}>
          <Tooltip id="1" overlay="This is tooltip" place="right">
            Tooltip
          </Tooltip>
          <br />
          <Tooltip id="2" overlay="This is tooltip" place="top">
            Tooltip
          </Tooltip>
          <br />
          <Tooltip id="3" overlay="This is tooltip" place="left">
            Tooltip
          </Tooltip>
          <br />
          <Tooltip id="4" overlay="This is tooltip">
            Tooltip
          </Tooltip>
        </div>
      </Story>
    ))
    .add('As link', () => (
      <Story>
        <Tooltip
          id="1"
          overlay="This is tooltip"
          componentClass="a"
          href="https://google.com"
        >
          Tooltip
        </Tooltip>
      </Story>
    ))
    .add('Without data', () => (
      <Story>
        <Tooltip id="test" overlay="This is tooltip" />
      </Story>

    ));
};
