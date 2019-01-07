import React from 'react';
import { Form, Field } from 'formik';
// import { Button } from 'react-bootstrap';
import Icon from 'react-icons2/mdi/magnify';
import Story from '../../../Story';
import createForm from '../../createForm';
import RadioCardsComponent from '../../controls/RadioCards';
import FormGroup from '../../FormGroup';
import DEV from '../../../DEV';

const RadioCardsView = (props) => {
  const {
    // handleSubmit,
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.radioCards} />
      <DEV json={values} />
      {/* <Button onClick={handleSubmit}>Submit</Button> */}
    </Form>
  );
};

const RadioCards = createForm({
  view: RadioCardsView,
  FormGroup,
  controls: {
    radioCards: {
      title: 'radioCards',
      component: RadioCardsComponent,
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

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('RadioCards ', () => {
      return (
        <Story>
          <RadioCards />
        </Story>
      );
    });
