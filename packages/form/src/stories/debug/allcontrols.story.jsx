import React from 'react';
import Story from '../../../Story';
import AllControlsForm from './AllControlsForm';

export default ({ storiesOf }) =>
  storiesOf('Form2/debug', module)
    .add('allcontrols', () => {
      return (
        <Story>
          <AllControlsForm />
        </Story>
      );
    });

