import React from 'react';
import { Form, Field } from 'formik';
// import { Button } from 'react-bootstrap';
import Icon from 'react-icons2/mdi/magnify';
import Story from '../../../Story';
import createForm from '../../createForm';
import RadioCards from './RadioCards';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

const RadioCardsFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.radioCards} />
      <FormDebug {...props} />
      {/* <Button onClick={handleSubmit}>Submit</Button> */}
    </Form>
  );
};

const RadioCardsForm = createForm({
  view: RadioCardsFormView,
  FormGroup,
  controls: {
    radioCards: {
      title: 'radioCards',
      component: RadioCards,
      options: [
        {
          value: 'value-1',
          title: 'title1',
          description: 'desc1',
          icon: <Icon />,
        },
        {
          value: 'value-2',
          title: 'title2',
          description: 'desc2',
        },
      ],
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('RadioCards ', () => {
      return (
        <Story>
          <RadioCardsForm />
        </Story>
      );
    });
