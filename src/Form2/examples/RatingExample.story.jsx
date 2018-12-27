import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../Story';
import createForm from '../createForm';
import Rating from '../controls/Rating';
import LightFormGroup from '../LightFormGroup';


const RatingExampleView = (props) => {
  const {
    handleSubmit,
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.rating} />
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

const RatingExample = createForm({
  view: RatingExampleView,
  FormGroup: LightFormGroup,
  controls: {
    rating: {
      title: 'Rating',
      component: Rating,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2', module)
    .add('RatingExample', () => {
      return (
        <Story>
          <RatingExample />
        </Story>
      );
    });
