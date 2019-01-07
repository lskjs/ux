import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import InputComponent from '../../controls/Input';
import CheckBlockComponent from '../../controls/CheckBlock';
import FormGroup from '../../FormGroup';
import DEV from '../../../DEV';


const CheckBlockView = (props) => {
  const {
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.checkBlock} />
      <DEV json={values} />
    </Form>
  );
};

const CheckBlock = createForm({
  view: CheckBlockView,
  FormGroup,
  controls: {
    checkBlock: {
      title: 'checkBlock',
      component: CheckBlockComponent,
      label: 'test',
      info: 'this is info',
      children: 'This is children',
      block: true,
    },
    input: {
      title: 'Input',
      component: InputComponent,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('CheckBlock ', () => {
      return (
        <Story>
          <CheckBlock />
        </Story>
      );
    });
