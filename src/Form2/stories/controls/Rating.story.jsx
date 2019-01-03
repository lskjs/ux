import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import RatingComponent from '../../controls/Rating';
import LightFormGroup from '../../LightFormGroup';
import DEV from '../../../DEV';

const RatingView = (props) => {
  const {
    handleSubmit,
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.rating} />
      <DEV json={values} />
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

const Rating = createForm({
  view: RatingView,
  FormGroup: LightFormGroup,
  controls: {
    rating: {
      title: 'Rating',
      component: RatingComponent,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Rating ', () => {
      return (
        <Story>
          <Rating />
        </Story>
      );
    });
