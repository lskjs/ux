import React from 'react';
import { Form, Field } from 'formik';
import Icon from 'react-icons2/mdi/magnify';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import RadioCards from './RadioCards';
import FormDebug from '../../FormDebug';

const RadioCardsFormView = props => (
  <Form>
    <Field {...props.control('radioCards')} />
    <FormDebug {...props} />
  </Form>
);


const RadioCardsForm = createForm({
  view: RadioCardsFormView,
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
  storiesOf('controls', module)
    .add('RadioCards ', () => {
      return (
        <Story>
          <RadioCardsForm />
        </Story>
      );
    });
