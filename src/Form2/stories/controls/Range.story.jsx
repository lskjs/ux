import React from 'react';
import { Form, Field } from 'formik';
// import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import RangeComponent from '../../controls/Range';
import LightFormGroup from '../../LightFormGroup';


const RangeView = (props) => {
  const {
    // handleSubmit,
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.range} />
      {/* <Button onClick={handleSubmit}>Submit</Button> */}
    </Form>
  );
};

const Range = createForm({
  view: RangeView,
  FormGroup: LightFormGroup,
  controls: {
    range: {
      title: 'range',
      component: RangeComponent,
      min: 0,
      max: 20,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Range ', () => {
      return (
        <Story>
          <Range />
        </Story>
      );
    });
