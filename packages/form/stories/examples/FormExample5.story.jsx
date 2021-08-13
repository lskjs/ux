import React from 'react';
import { Form, FastField } from 'formik';
import UappStory from '@lskjs/dev/Story/UappStory';
import Modal from '@lskjs/modal';
import Button from '@lskjs/button';

import createForm from '../../createForm';
import Input from '../../controls/Input';
import FormDebug from '../../FormDebug';

const FormExample5View = props => {
  const { control } = props;
  console.log(props);
  return (
    <Form>
      <Modal.Content>
        <FastField {...control('input')} />
      </Modal.Content>
      <Modal.Footer>
        <div style={{ width: '100%' }}>
          <FormDebug {...props} />
        </div>
      </Modal.Footer>
    </Form>
  );
};

export const FormExample5 = createForm({
  view: FormExample5View,
  controls: {
    input: {
      component: Input,
      title: 'Input',
      required: false,
      placeholder: 'Input',
      validator: {
        message: 'Поле не должно быть пустым',
      },
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/examples', module).add('FormExample5', () => (
    <UappStory>
      <Modal size="small" trigger={<Button paint="primary">Open form</Button>}>
        <Modal.Title>FormExample5</Modal.Title>
        <FormExample5 onSubmit={console.log} />
      </Modal>
    </UappStory>
  ));
