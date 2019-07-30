import React from 'react';
import { Form, FastField } from 'formik';

import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import defaultShouldUpdate from '../../defaultShouldUpdate';
import Input from '../../controls/Input';
import Checkbox from '../../controls/Checkbox';
import FormDebug from '../../FormDebug';

const FormExample3View = props => (
  <Form>
    <FastField {...props.control('checkbox')} />
    <FastField
      {...props.control('input')}
      isDisabled={!props.values.checkbox}
      _required={props.values.checkbox}
      shouldUpdate={(nextProps, prevProps) => (
        nextProps._required !== prevProps._required
        || defaultShouldUpdate(nextProps, prevProps)
      )}
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
  storiesOf('examples', module)
    .add('FormExample4', () => {
      return (
        <Story>
          <FormExample3 onSubmit={console.log} />
        </Story>
      );
    });
