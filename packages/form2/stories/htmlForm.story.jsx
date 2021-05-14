// import Story from '@lskjs/dev/Story';
import { Field, Form } from 'formik';
import React from 'react';

import createForm from '../src/createForm';
// import FormDebug from '../FormDebug';

const HtmlFormView = (props) => (
  <Form>
    <Field {...props.control('input')} />
    <Field {...props.control('textarea')} />
    <Field {...props.control('checkbox')} />
    <Field {...props.control('date')} />
    <Field {...props.control('select')} />
    <button type="submit">Submit</button>
    <br />
    <div>{JSON.stringify(props, null, 2)}</div>
  </Form>
);

const InputControl = () => <input />;
const TextareaControl = () => <textarea />;
const CheckboxControl = () => <input type="checkbox" />;
const DateControl = () => <input type="date" />;
const SelectControl = () => (
  <select name="options" id="opts">
    <option value="1">First</option>
    <option value="2">Second</option>
    <option value="3">Third</option>
  </select>
);

const HtmlForm = createForm({
  view: HtmlFormView,
  controls: {
    input: {
      title: 'Input',
      initialValue: '',
      component: InputControl,
    },
    textarea: {
      title: 'Textarea',
      initialValue: '',
      component: TextareaControl,
    },
    checkbox: {
      title: 'Checkbox',
      initialValue: '',
      component: CheckboxControl,
    },
    date: {
      title: 'Date',
      initialValue: '',
      component: DateControl,
    },
    select: {
      title: 'Select',
      initialValue: '',
      component: SelectControl,
    },
  },
});

export default {
  title: 'form2/htmlForm',
  component: HtmlForm,
};

export const Default = () => <HtmlForm />;
