import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import SelectComponent from '../../controls/Select';
import LightFormGroup from '../../LightFormGroup';


const SelectView = (props) => {
  const {
    handleSubmit,
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.select} />
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

const Select = createForm({
  view: SelectView,
  FormGroup: LightFormGroup,
  controls: {
    select: {
      title: 'select',
      component: SelectComponent,
      type: 'select',
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
      placeholder: 'Select  ',
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/stories/controls', module)
    .add('Select ', () => {
      return (
        <Story>
          <Select />
        </Story>
      );
    });
