import { Field, Form } from 'formik';
import React from 'react';

import { GroupOf } from '../../form-control-groupof/src/GroupOf';
import createForm from '../src/createForm';

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
  title: 'form2/GroupOfForm',
  component: RadioForm,
};

export const Default = () => <RadioForm />;
