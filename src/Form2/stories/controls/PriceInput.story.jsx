import React from 'react';
import { Form, Field } from 'formik';
// import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import PriceInputComponent from '../../controls/PriceInput';
import LightFormGroup from '../../LightFormGroup';


const PriceInputView = (props) => {
  const {
    // handleSubmit,
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.priceInput} />
      {/* <Button onClick={handleSubmit}>Submit</Button> */}
    </Form>
  );
};

const PriceInput = createForm({
  view: PriceInputView,
  FormGroup: LightFormGroup,
  controls: {
    priceInput: {
      title: 'PriceInput',
      component: PriceInputComponent,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('PriceInput ', () => {
      return (
        <Story>
          <PriceInput />
        </Story>
      );
    });
