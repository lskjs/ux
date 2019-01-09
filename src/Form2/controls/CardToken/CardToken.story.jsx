import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import CardToken from './CardToken';
import FormGroup from '../../FormGroup';


const CardTokenFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.cardToken} />
    </Form>
  );
};

const CardTokenForm = createForm({
  view: CardTokenFormView,
  FormGroup,
  controls: {
    cardToken: {
      title: 'CardToken',
      component: CardToken,
      options: [
        {
          title: 'asd',
        },
      ],
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('CardToken ', () => {
      return (
        <Story>
          <CardTokenForm />
        </Story>
      );
    });
