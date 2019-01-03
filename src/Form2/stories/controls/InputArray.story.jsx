import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import InputArrayComponent from '../../controls/InputArray';
import LightFormGroup from '../../LightFormGroup';
import DEV from '../../../DEV';

const InputArrayView = (props) => {
  const {
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.inputArray} />
      <DEV json={values} />
    </Form>
  );
};

const InputArray = createForm({
  view: InputArrayView,
  FormGroup: LightFormGroup,
  controls: {
    inputArray: {
      title: 'InputArray',
      component: InputArrayComponent,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('InputArray ', () => {
      return (
        <Story>
          <InputArray />
        </Story>
      );
    });
