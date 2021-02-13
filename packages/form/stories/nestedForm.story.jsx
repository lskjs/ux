import React, { createRef } from 'react';
import { Form, Field } from 'formik';
import DEV from '@lskjs/dev/DEV';
import Story from './Story';
import createForm from '../createForm';
import FormDebug from '../FormDebug';

import Input from '../controls/Input';
import Select from '../controls/Select';
import ArrayOf from '../controls/ArrayOf';
import createNestedFormControl from '../createNestedFormControl';

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
