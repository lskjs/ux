import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import CardTokenComponent from '../../controls/CardToken';
import LightFormGroup from '../../LightFormGroup';


const CardTokenView = (props) => {
  const {
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.cardToken} />
    </Form>
  );
};

const CardToken = createForm({
  view: CardTokenView,
  FormGroup: LightFormGroup,
  controls: {
    cardToken: {
      title: 'CardToken',
      component: CardTokenComponent,
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
          <CardToken />
        </Story>
      );
    });
