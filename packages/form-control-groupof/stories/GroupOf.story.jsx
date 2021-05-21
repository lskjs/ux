import { Field, Form } from 'formik';
import React from 'react';

import createForm from '../../form2/src/createForm';
import { GroupOf } from '../src/GroupOf';

const Radio = () => <input type="radio" id="radioButton" />;

const RadioFormView = (props) => (
  <Form>
    <Field {...props.control('color')} />
    {/* <FormDebug {...props} /> */}
  </Form>
);

const RadioForm = createForm({
  view: RadioFormView,
  controls: {
    color: {
      component: GroupOf,
      itemComponent: Radio,
      title: 'Выбор одного элемента',
      required: true,
      options: ['One', 'Two', 'Three'],
    },
  },
});

export default {
  title: 'form-control-group-of/RadioForm',
  component: RadioForm,
};

export const Default = () => <RadioForm />;
