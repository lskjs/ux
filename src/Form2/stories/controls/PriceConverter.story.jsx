import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import PriceConverterComponent from '../../controls/PriceConverter';
import FormGroup from '../../FormGroup';
import DEV from '../../../DEV';

const PriceConverterView = (props) => {
  const {
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.priceConverter} />
      <DEV json={values} />
    </Form>
  );
};

const PriceConverter = createForm({
  view: PriceConverterView,
  FormGroup,
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
