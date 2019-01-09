import React from 'react';
import { Form, Field } from 'formik';
// import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import PriceInput from './PriceInput';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

const PriceInputFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.priceInput} />
      <FormDebug {...props} />
      {/* <Button onClick={handleSubmit}>Submit</Button> */}
    </Form>
  );
};

const PriceInputForm = createForm({
  view: PriceInputFormView,
  FormGroup,
  controls: {
    priceInput: {
      title: 'PriceInput',
      component: PriceInput,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('PriceInput ', () => {
      return (
        <Story>
          <PriceInputForm />
        </Story>
      );
    });
