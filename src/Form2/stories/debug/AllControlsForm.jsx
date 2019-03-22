import React from 'react';
import { Form, Field } from 'formik';

import createForm from '../../createForm';
import Input from '../../controls/Input';
import Select from '../../controls/Select';
import Tags from '../../controls/Tags';
import PhoneInput from '../../controls/PhoneInput';
import FormDebug from '../../FormDebug';
import PercentSlider from '../../controls/PercentSlider';
import Files from '../../controls/Files';

export const View = props => (
  <Form>
    <Field {...props.control('input')} />
    <Field {...props.control('select')} />
    <Field {...props.control('tags')} />
    <Field {...props.control('slider')} />
    <Field {...props.control('phone')} />
    <Field {...props.control('newphone')} />
    <Field {...props.control('files')} />
    <FormDebug {...props} />
  </Form>
);

export const controls = {
  input: {
    title: 'Input',
    component: Input,
  },
  select: {
    title: 'Select',
    component: Select,
    options: ['a', 'b', 'c'],
  },
  tags: {
    title: 'Tags',
    component: Tags,
    flat: true,
    options: ['a', 'b', 'c'],
  },
  slider: {
    title: 'PercentSlider',
    component: PercentSlider,
  },
  phone: {
    title: 'PhoneInput',
    component: PhoneInput,
  },
  files: {
    title: 'Files',
    component: Files,
  },
};

export default createForm({
  view: View,
  controls,
});
