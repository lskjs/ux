import React from 'react';
import Story from '@lskjs/dev/Story';
import Button from '@lskjs/button';
import UrlButton from './UrlButton';

// import '../../../Root/Storybook.g.css';

export default ({ storiesOf }) => {
  storiesOf('Button/UrlButton', module)
    .add('Default', () => (
      <Story>
        <UrlButton
          componentClass={Button}
          paint="primary"
          url="/api/v1/auth/silent?id=594bd196e0168d51ab5e60d7"
        >
          URL Button
        </UrlButton>
      </Story>
    ));
};
