import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import SelectComponent from '../../controls/Select';
import LightFormGroup from '../../LightFormGroup';
import DEV from '../../../DEV';

const SelectView = (props) => {
  const {
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.select} />
      <Button >Submit</Button>
      <DEV json={values} />
    </Form>
  );
};

const Select = createForm({
  view: SelectView,
  FormGroup: LightFormGroup,
  controls: {
    select: {
      title: 'The Select',
      component: SelectComponent,
      options: [
        {
          value: 'corporation',
          title: 'first',
        },
        {
          value: 'individual',
          title: 'second',
        },
      ],
      placeholder: 'placeholder',
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Select ', () => {
      return (
        <Story>
          <Select />
        </Story>
      );
    });
