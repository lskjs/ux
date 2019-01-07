import React from 'react';
import { Form, Field } from 'formik';
// import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import RadioComponent from '../../controls/Radio';
import LightFormGroup from '../../LightFormGroup';
import DEV from '../../../DEV';

const RadioView = (props) => {
  const {
    // handleSubmit,
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.blue} />
      <Field {...controls.black} />
      <Field {...controls.green} />
      <DEV json={values} />
      {/* <Button onClick={handleSubmit}>Submit</Button> */}
    </Form>
  );
};

const Radio = createForm({
  view: RadioView,
  FormGroup: LightFormGroup,
  controls: {
    blue: {
      title: 'first value',
      component: RadioComponent,
      options: [
        {
          value: 'fixed',
          title: 'asd',
        },
        {
          value: 'cpm',
          title: 'offerEdit.type.cpm',
        },
      ],
    },
    black: {
      title: 'second value',
      component: RadioComponent,
    },
    green: {
      title: 'third value',
      component: RadioComponent,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Radio ', () => {
      return (
        <Story>
          <Radio />
        </Story>
      );
    });
