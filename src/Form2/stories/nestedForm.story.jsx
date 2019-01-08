import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../Story';
import createForm from '../createForm';
import FormGroup from '../FormGroup';
import FormDebug from '../FormDebug';
import OnChangeListener from '../OnChangeListener';

import Input from '../controls/Input';
import Select from '../controls/Select';
import ArrayOf from '../controls/ArrayOf';


const createNestedFormControl = Component => (props) => {
  // {...props.controls.name}
  const { form, field, ...otherProps } = props;
  const { value } = field;
  return (
    <Component
      // {...field}
      {...otherProps}
      initialValues={value}
      onChange={(values) => {
        console.log('onChange', values);
        form.setFieldValue(field.name, values);
      }}
    />
  );
};


const EntityFormView = (props) => {
  return (
    <Form>
      <h3>EntityForm:</h3>
      <Field {...props.controls.name} />
      <Field {...props.controls.money} />
      <Field {...props.controls.gender} />
      <OnChangeListener
        props={props}
        values={props.values}
        onChange={props.onChange}
      />
      {/* <FormDebug {...props} /> */}
    </Form>
  );
};

const EntityForm = createForm({
  view: EntityFormView,
  FormGroup,
  controls: {
    name: {
      title: 'Name',
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


const ComplexFormView = (props) => {
  return (
    <Form>
      {/* <Field {...props.controls.director} />
      <hr />
      <hr />
      <FormDebug {...props} />
      <hr />
      <hr />
      <hr />
      <hr /> */}
      <h3>ArrayOfEntityForm:</h3>
      <Field {...props.controls.title} />
      <Field {...props.controls.director} />
      <Field {...props.controls.users} />
      <FormDebug {...props} />
    </Form>
  );
};

const ComplexForm = createForm({
  view: ComplexFormView,
  FormGroup,
  controls: {
    title: {
      title: 'Номер группы',
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
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/nestedForm', module)
    .add('EntityForm', () => {
      return (
        <Story>
          <EntityForm />
        </Story>
      );
    })
    .add('ComplexForm', () => {
      return (
        <Story>
          <ComplexForm />
        </Story>
      );
    });

