import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import InputArrayComponent from '../../controls/InputArray';
import LightFormGroup from '../../LightFormGroup';


const InputArrayView = (props) => {
  const {
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.inputArray} />
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
