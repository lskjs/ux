/* eslint import/no-extraneous-dependencies: 0 */
import React, { createRef } from 'react';
import Story from '@lskjs/dev/Story';
import Button from '@lskjs/button';
import Input from '../controls/Input';
import Textarea from '../controls/Textarea';
import sure from './sure';
import form from './modal';

export default ({ storiesOf }) => (
  storiesOf('form/Modal2/hoc', module)
    .add('Are you sure', () => {
      const SureModal = sure();
      const innerRef = createRef();
      return (
        <Story>
          <SureModal
            innerRef={innerRef}
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
          <button
            type="button"
            onClick={() => {
              innerRef.current.open();
            }}
          >
            Open by ref
          </button>
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
      const innerRef = createRef();
      return (
        <Story>
          <FormModal
            innerRef={innerRef}
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
          <button
            type="button"
            onClick={() => {
              innerRef.current.open();
            }}
          >
            Open by ref
          </button>
        </Story>
      );
    })
);
