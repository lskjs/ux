/* eslint import/no-extraneous-dependencies: 0 */
import Button from '@lskjs/button';
import Story from '@lskjs/dev/Story';
import React, { createRef } from 'react';

import Input from '../src/controls/Input';
import Textarea from '../src/controls/Textarea';
import form from '../src/hoc/modal';
import sure from '../src/hoc/sure';

export default ({ storiesOf }) =>
  storiesOf('form/hoc', module)
    .add('Are you sure', () => {
      const SureModal = sure();
      const ref = createRef();
      return (
        <Story>
          <SureModal
            ref={ref}
            title="Deleting"
            content="Are you sure"
            onSubmit={() => console.log('yes')}
            onClose={() => console.log('onClose')}
          >
            <Button paint="danger">Удалить</Button>
          </SureModal>
          <hr />
          <Button paing="primary " type="button" onClick={() => ref.current.open()}>
            Open by ref
          </Button>
        </Story>
      );
    })
    .add('Form modal', () => {
      const FormModal = form({
        controls: {
          name: {
            title: 'name',
            component: Input,
            placeholder: 'your name',
          },
          textarea: {
            title: 'about',
            component: Textarea,
            placeholder: 'your comment',
          },
        },
      });
      const ref = createRef();
      return (
        <Story>
          <FormModal
            ref={ref}
            title="Request"
            content="Do you want"
            onSubmit={(values) => console.log('yes', values)}
            onClose={() => console.log('onClose')}
          >
            <Button paint="success">Send bio</Button>
          </FormModal>
          <hr />
          <Button paing="primary " type="button" onClick={() => ref.current.open()}>
            Open by ref
          </Button>
        </Story>
      );
    });
