import React from 'react';
import Input from '@lskjs/form/controls/Input';
import Textarea from '@lskjs/form/controls/Textarea';
import Story from '@lskjs/dev/Story';
import Button from '@lskjs/button';
import sure from './sure';
import form from './form';

export default ({ storiesOf }) => storiesOf('Modal2/hoc', module)
  .add('Are you sure', () => {
    const SureModal = sure();
    return (
      <Story>
        <SureModal
          title="Deleting"
          content="Are you sure"
          onSubmit={() => console.log('yes')}
          onClose={() => console.log('onClose')}
        >
          <Button
            paint="danger"
          >
              Удалить
          </Button>
        </SureModal>
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
    return (
      <Story>
        <FormModal
          title="Request"
          content="Do you want"
          onSubmit={values => console.log('yes', values)}
          onClose={() => console.log('onClose')}
        >
          <Button
            paint="success"
          >
              Send bio
          </Button>
        </FormModal>
      </Story>
    );
  });
