import { FastField, Form } from 'formik';
import React from 'react';

import Checkbox from '../../src/controls/Checkbox';
import Input from '../../src/controls/Input';
import createForm from '../../src/createForm';
import defaultShouldUpdate from '../../src/defaultShouldUpdate';
import FormDebug from '../../src/FormDebug';
import Story from '../Story';

const FormExample3View = (props) => (
  <Form>
    <FastField {...props.control('checkbox')} />
    <FastField
      {...props.control('input')}
      isDisabled={!props.values.checkbox}
      _required={props.values.checkbox}
      shouldUpdate={(nextProps, prevProps) =>
        nextProps._required !== prevProps._required || defaultShouldUpdate(nextProps, prevProps)
      }
    />
    <FormDebug {...props} />
  </Form>
);

export const FormExample3 = createForm({
  view: FormExample3View,
  controls: {
    checkbox: {
      title: 'The Checkbox',
      component: Checkbox,
      label: 'Checkbox label',
      placeholder: 'Checkbox placeholder',
    },
    input: {
      component: Input,
      title: 'Input',
      required: true,
      placeholder: 'Input',
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/examples', module).add('FormExample4', () => (
    <Story>
      <FormExample3 onSubmit={console.log} />
    </Story>
  ));
