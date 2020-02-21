/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../createForm';
import FormDebug from '../FormDebug';

import Input from '../controls/Input';
import Select from '../controls/Select';
import ArrayOf from '../controls/ArrayOf';
import createNestedFormControl from '../createNestedFormControl';

const EntityFormView = props => (
  <Form>
    <h3>EntityForm:</h3>
    <Field {...props.control('name')} />
    <Field {...props.control('money')} />
    <Field {...props.control('gender')} />
  </Form>
);

const EntityForm = createForm({
  view: EntityFormView,
  controls: {
    name: {
      title: 'form.name',
      withI18: true,
      component: Input,
    },
    money: {
      title: 'form.money',
      withI18: true,
      component: Input,
      type: 'number',
    },
    gender: {
      title: 'form.gender',
      withI18: true,
      component: Select,
      options: ['male', 'female'],
    },
  },
});

const ComplexFormView = props => (
  <Form>
    <h3>ArrayOfEntityForm:</h3>
    <Field {...props.control('title')} />
    <Field {...props.control('director')} />
    <Field {...props.control('users')} />
    <FormDebug {...props} />
  </Form>
);

const ComplexForm = createForm({
  withI18: true,
  view: ComplexFormView,
  controls: {
    title: {
      title: 'form.title',
      component: Input,
    },
    director: {
      title: 'form.director',
      // component: Input,
      component: createNestedFormControl(EntityForm),
    },
    users: {
      title: 'form.users',
      component: ArrayOf,
      itemComponent: createNestedFormControl(EntityForm),
      showAddButton: true,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/i18', module)
    .add('EntityForm i18', () => (
      <Story devtools>
        <EntityForm />
      </Story>
    ))
    .add('ComplexForm i18', () => (
      <Story devtools>
        <ComplexForm />
      </Story>
    ));
