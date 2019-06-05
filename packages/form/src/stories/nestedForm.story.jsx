import React, { createRef } from 'react';
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
    <Field {...props.controls.name} />
    <Field {...props.controls.money} />
    <Field {...props.controls.gender} />
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


const ComplexFormView = props => (
  <Form>
    <h3>ArrayOfEntityForm:</h3>
    <Field {...props.controls.title} />
    <Field {...props.controls.director} />
    <Field {...props.controls.users} />
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
      // component: Input,
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

export default ({ storiesOf }) => storiesOf('nestedForm', module)
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
          console.log('ComplexForm.onSubmit', values);
          console.log('ref', ref);
        }}
      />
    </Story>
  ));
