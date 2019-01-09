import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import Rating from './Rating';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

const RatingFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.rating} />
      <FormDebug {...props} />
      <Button onClick={props.handleSubmit}>Submit</Button>
    </Form>
  );
};

const RatingForm = createForm({
  view: RatingFormView,
  FormGroup,
  controls: {
    rating: {
      title: 'Rating',
      component: Rating,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Rating ', () => {
      return (
        <Story>
          <RatingForm />
        </Story>
      );
    });
