import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../Story';
import createForm from '../createForm';
import FormGroup from '../FormGroup';
import OnChangeListener from '../OnChangeListener';
import Input from '../controls/Input';
import FormDebug from '../FormDebug';


const OnChangeView = (props) => {
  const {
    values,
    onChange,
  } = props;
  return (
    <Form>
      <Field {...props.controls.input} />
      <FormDebug {...props} />
      <OnChangeListener
        props={props}
        values={values}
        onChange={onChange}
      />
    </Form>
  );
};

const OnChangeForm = createForm({
  view: OnChangeView,
  FormGroup,
  controls: {
    input: {
      title: 'Input',
      component: Input,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2', module)
    .add('OnChangeListener ', () => {
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
