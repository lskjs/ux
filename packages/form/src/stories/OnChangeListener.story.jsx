import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../createForm';
import Input from '../controls/Input';
import FormDebug from '../FormDebug';


const OnChangeView = (props) => {
  return (
    <Form>
      <Field {...props.control('input')} />
      <FormDebug {...props} />
    </Form>
  );
};

const OnChangeForm = createForm({
  view: OnChangeView,
  controls: {
    input: {
      title: 'Input',
      component: Input,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form', module)
    .add('onChange ', () => {
      return (
        <Story>
          <OnChangeForm
            onChange={(values) => {
              console.log('onChange', values);
            }}
          />
        </Story>
      );
    });
