import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import Button from '@lskjs/button';
// import GridFile from '../components/Files/components/GridFile';
import GridFile from '../controls/Files/components/GridFile';
import sure from '../hoc/sure';

import createForm from '../createForm';
import Input from '../controls/Input';
import FormDebug from '../FormDebug';
// import form from './modal';

const SureModal = sure();

const InputFormView = props => (
  <Form>
    <Field {...props.control('input')} />
    <Button>Button</Button>
    <Button type="submit">Button</Button>
    <button>button</button>
    <button type="submit">button submit</button>
      <GridFile
        title="title"
        url="http://shiz.co/beatlescode/assets/hereComesTheSun.mp3"
        size={10000}
        onRemove={() => console.log('onRemove')}
      />
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
    <FormDebug {...props} />
  </Form>
);

const InputForm = createForm({
  view: InputFormView,
  controls: {
    input: {
      title: 'Input',
      initialValue: 'one',
      component: Input,
    },
  },
});

export default ({ storiesOf }) => storiesOf('Form', module)
  .add('formAndModal', () => (
    <Story>
      <InputForm
        onChange={(values) => { console.log('onChange', values); }}
        onSubmit={(values) => { console.log('onSubmit', values); }}
      />
    </Story>
  ));
