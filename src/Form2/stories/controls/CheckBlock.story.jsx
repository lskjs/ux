import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import CheckBlockComponent from '../../controls/CheckBlock';
import LightFormGroup from '../../LightFormGroup';


const CheckBlockView = (props) => {
  const {
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.checkBlock} />
    </Form>
  );
};

const CheckBlock = createForm({
  view: CheckBlockView,
  FormGroup: LightFormGroup,
  controls: {
    checkBlock: {
      title: 'checkBlock',
      component: CheckBlockComponent,
      label: 'test',
      info: 'this is info',
      children: 'This is children',
      block: true,
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
