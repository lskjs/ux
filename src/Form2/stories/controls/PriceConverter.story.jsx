import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import PriceConverterComponent from '../../controls/PriceConverter';
import LightFormGroup from '../../LightFormGroup';


const PriceConverterView = (props) => {
  const {
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.priceConverter} />
    </Form>
  );
};

const PriceConverter = createForm({
  view: PriceConverterView,
  FormGroup: LightFormGroup,
  controls: {
    priceConverter: {
      title: 'PriceConverter',
      component: PriceConverterComponent,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('PriceConverter ', () => {
      return (
        <Story>
          <PriceConverter />
        </Story>
      );
    });
