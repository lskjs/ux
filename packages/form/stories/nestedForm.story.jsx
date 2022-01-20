import DEV from '@lskjs/dev/DEV';
import { Field, Form } from 'formik';
import React, { createRef } from 'react';

import ArrayOf from '../src/controls/ArrayOf';
import Input from '../src/controls/Input';
import Select from '../src/controls/Select';
import createForm from '../src/createForm';
import createNestedFormControl from '../src/createNestedFormControl';
import FormDebug from '../src/FormDebug';
import Story from './Story';

window.__DEV__ = typeof window !== 'undefined' && window.location.hostname === 'localhost';

const EntityFormView = ({ control, genders }) => (
  <Form>
    <h3>EntityForm:</h3>
    <Field {...control('name')} />
    <Field {...control('money')} />
    <Field {...control('gender')} options={genders} />
    <DEV json={genders} />
  </Form>
);

const EntityForm = createForm({
  view: EntityFormView,
  controls: {
    name: {
      title: 'Name',
      required: true,
      component: Input,
    },
    money: {
      title: 'Money',
      component: Input,
      type: 'number',
    },
    gender: {
      title: 'Gender',
      component: Select,
      options: ['male', 'female'],
    },
  },
});

const ComplexFormView = ({ control, genders, ...props }) => (
  <Form>
    <DEV json={genders} />
    <h3>ArrayOfEntityForm:</h3>
    <Field {...control('title')} />
    <Field {...control('director')} genders={genders} />
    <Field {...control('users')} itemProps={{ genders }} />
    <FormDebug {...props} />
  </Form>
);

const ComplexForm = createForm({
  view: ComplexFormView,
  controls: {
    title: {
      title: 'Номер группы',
      required: true,
      component: Input,
    },
    director: {
      title: 'Директор',
      component: createNestedFormControl(EntityForm),
    },
    users: {
      title: 'Ученики',
      component: ArrayOf,
      itemComponent: createNestedFormControl(EntityForm),
      showAddButton: true,
      showRemoveButton: true,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/nestedForm', module)
    .add('EntityForm', () => (
      <Story devtools>
        <EntityForm />
      </Story>
    ))
    .add('ComplexForm', ({ ref = createRef() }) => (
      <Story devtools>
        <ComplexForm
          ref={ref}
          onSubmit={(values) => {
            console.log('ComplexForm.onSubmit', values);  // eslint-disable-line
          }}
        />
      </Story>
    ))
    .add('ComplexForm with deep props', ({ ref = createRef() }) => (
      <Story devtools>
        <ComplexForm
          ref={ref}
          genders={['male', 'female', 'agender', 'transgender', 'poligender']}
          test={[123]}
          onSubmit={(values) => {
            console.log('ComplexForm.onSubmit', values);  // eslint-disable-line
          }}
        />
      </Story>
    ));
