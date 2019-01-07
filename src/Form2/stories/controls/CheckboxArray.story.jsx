import React from 'react';
import { Form, Field } from 'formik';
// import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import Checkbox from '../../../UI/molecules/Checkbox';
import CheckboxArrayComponent from '../../controls/CheckboxArray';
import CheckboxDeal from '../../../UI/molecules/CheckboxDeal';

import LightFormGroup from '../../LightFormGroup';
import DEV from '../../../DEV';

const CheckboxArrayView = (props) => {
  const {
    // handleSubmit,
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.checkboxArray} />
      <DEV json={values} />
      {/* <Button onClick={handleSubmit}>Submit</Button> */}
    </Form>
  );
};

const CheckboxArray = createForm({
  view: CheckboxArrayView,
  FormGroup: LightFormGroup,
  controls: {
    checkboxArray: {
      title: 'checkboxArray',
      component: CheckboxArrayComponent,
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
          <CheckboxArray />
        </Story>
      );
    });
