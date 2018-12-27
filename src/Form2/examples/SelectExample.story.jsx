import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../Story';
import createForm from '../createForm';
import Select from '../controls/Select';
import LightFormGroup from '../LightFormGroup';


const SelectExampleView = (props) => {
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

const SelectExample = createForm({
  view: SelectExampleView,
  FormGroup: LightFormGroup,
  controls: {
    select: {
      title: 'select',
      component: Select,
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
      placeholder: 'Select Example',
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2', module)
    .add('SelectExample', () => {
      return (
        <Story>
          <SelectExample />
        </Story>
      );
    });
