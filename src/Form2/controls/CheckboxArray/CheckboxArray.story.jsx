import React from 'react';
import { Form, Field } from 'formik';
// import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import Checkbox from '../Checkbox/Checkbox';
import CheckboxArray from './CheckboxArray';
import CheckboxDeal from '../../../UI/molecules/CheckboxDeal/CheckboxDeal';

import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

const CheckboxArrayFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.checkboxArray} />
      <FormDebug {...props} />
      {/* <Button onClick={handleSubmit}>Submit</Button> */}
    </Form>
  );
};

const CheckboxArrayForm = createForm({
  view: CheckboxArrayFormView,
  FormGroup,
  controls: {
    checkboxArray: {
      title: 'checkboxArray',
      component: CheckboxArray,
      itemComponent: CheckboxDeal,
      options: [
        {
          _id: 1,
          title: 'value1',
          link: 'google.com',
          price: 15000,
        },
        {
          _id: 2,
          title: 'value2',
          link: 'google.com',
          price: 1000,
        },
      ],
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('CheckboxArray ', () => {
      return (
        <Story>
          <CheckboxArrayForm />
        </Story>
      );
    });
