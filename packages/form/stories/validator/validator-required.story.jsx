/* eslint-disable react/destructuring-assignment */
import { Field, Form } from 'formik';
import React from 'react';

import ArrayOf from '../../src/controls/ArrayOf';
import Checkbox from '../../src/controls/Checkbox';
import Date from '../../src/controls/Date';
import Files from '../../src/controls/Files';
import Image from '../../src/controls/Image';
import Input from '../../src/controls/Input';
import PhoneInput from '../../src/controls/PhoneInput';
import Radio from '../../src/controls/Radio';
import Range from '../../src/controls/Range';
import Select from '../../src/controls/Select';
import Switcher from '../../src/controls/Switcher';
import Tags from '../../src/controls/Tags';
import createForm from '../../src/createForm';
import FormDebug from '../../src/FormDebug';
import Story from '../Story';

const ValidationView = (props) => (
  <Form>
    <Field {...props.control('input')} />
    <Field {...props.control('select')} />
    <Field {...props.control('switcher')} />
    <Field {...props.control('checkbox')} />
    <Field {...props.control('radio')} />
    <Field {...props.control('range')} />
    <Field {...props.control('date')} />
    <Field {...props.control('files')} />
    <Field {...props.control('image')} />
    <Field {...props.control('phoneInput')} />
    <Field {...props.control('tags')} />
    <Field {...props.control('array')} />
    <FormDebug {...props} />
  </Form>
);

const Validation = createForm({
  view: ValidationView,
  controls: {
    input: {
      title: 'input',
      component: Input,
      required: true,
    },
    select: {
      title: 'select',
      component: Select,
      options: [1, 2, 3, 4],
      required: true,
    },
    switcher: {
      title: 'switcher',
      component: Switcher,
      required: true,
    },
    checkbox: {
      title: 'checkbox',
      component: Checkbox,
      label: 'checkbox-label',
      required: true,
    },
    radio: {
      title: 'radio',
      component: Radio,
      required: true,
    },
    range: {
      title: 'range',
      component: Range,
      required: true,
    },
    date: {
      title: 'date',
      component: Date,
      required: true,
    },
    files: {
      title: 'files',
      component: Files,
      required: true,
    },
    image: {
      title: 'image',
      component: Image,
      required: true,
    },
    phoneInput: {
      title: 'phoneInput',
      component: PhoneInput,
      required: true,
    },
    tags: {
      title: 'tags',
      component: Tags,
      required: true,
    },
    array: {
      title: 'array',
      component: ArrayOf,
      itemComponent: Input,
      itemProps: {
        type: 'number',
      },
      itemInitialValue: '',
      showRemoveButton: true,
      autoAddLastItem: true,
      required: true,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/validator', module).add('validator with required', () => (
    <Story>
      <Validation
        onSubmit={(values) => {
          console.log({ values });
        }}
      />
    </Story>
  ));
