import Button from '@lskjs/button';
import { Field, Form } from 'formik';
import React from 'react';

// import GridFile from '../components/Files/components/GridFile';
import GridFile from '../src/controls/Files/components/GridFile';
import Input from '../src/controls/Input';
import createForm from '../src/createForm';
import FormDebug from '../src/FormDebug';
import sure from '../src/hoc/sure';
import Story from './Story';
// import form from './modal';

const SureModal = sure();

const InputFormView = (props) => (
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
      <Button paint="danger">Удалить</Button>
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

export default ({ storiesOf }) =>
  storiesOf('form/Form', module).add('formAndModal', () => (
    <Story>
      <InputForm
        onChange={(values) => {
          console.log('onChange', values);
        }}
        onSubmit={(values) => {
          console.log('onSubmit', values);
        }}
      />
    </Story>
  ));
