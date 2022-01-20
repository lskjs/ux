import { FastField, Form } from 'formik';
import React from 'react';

import Checkbox from '../../src/controls/Checkbox';
import Input from '../../src/controls/Input';
import Select from '../../src/controls/Select';
import Tags from '../../src/controls/Tags';
import createForm from '../../src/createForm';
import FormDebug from '../../src/FormDebug';
import Story from '../Story';

const FormExample1View = (props) => (
  <Form>
    <FastField {...props.control('input')} />
    <FastField {...props.control('select')} />
    <FastField {...props.control('checkbox')} />
    <FastField {...props.control('tags')} />
    <FormDebug {...props} />
  </Form>
);

export const FormExample1 = createForm({
  view: FormExample1View,
  controls: {
    input: {
      title: 'input',
      component: Input,
      placeholder: 'input',
    },
    select: {
      title: 'The Select',
      component: Select,
      options: [
        {
          value: 'corporation',
          title: 'first',
        },
        {
          value: 'individual',
          title: 'second',
        },
      ],
      placeholder: 'placeholder',
    },
    checkbox: {
      title: 'The Checkbox',
      component: Checkbox,
      label: 'Checkbox label',
      placeholder: 'Checkbox placeholder',
    },
    tags: {
      title: 'tags',
      component: Tags,
      triggerTitle: 'Выбрать теги',
      flat: true,
      options: [
        {
          value: 'one',
          title: 'Один',
        },
        {
          value: 'two',
          title: 'Два',
        },
        {
          value: 'three',
          title: 'Три',
        },
        {
          value: 'four',
          title: 'Четыре',
        },
      ],
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/examples', module).add('FormExample1', () => (
    <Story>
      <FormExample1 />
    </Story>
  ));
