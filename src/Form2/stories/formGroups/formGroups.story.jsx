import React, { Component } from 'react';
import { Form, Field } from 'formik';

import Story from '../../../Story';
import DEV from '../../../DEV';
import createForm from '../../createForm';
import FormGroup from '../../FormGroup';
import SimpleFormGroup from '../../SimpleFormGroup';
import Input from '../../../Input';

const ctrls = {
  input: {
    title: 'input',
    component: Input,
    placeholder: 'offer.placeholders.title',
  },
  input2: {
    title: 'input2',
    required: true,
    component: Input,
    placeholder: 'offer.placeholders.title',
  },
  input3: {
    title: 'input3',
    help: 'help',
    component: Input,
    placeholder: 'offer.placeholders.title',
  },
};

const FormExampleView = (props) => {
  const {
    handleSubmit,
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.input} />
      <Field {...controls.input2} />
      <Field {...controls.input3} />
      <button onClick={handleSubmit}>Submit</button>
      <DEV json={Math.random()} />
      <DEV json={values} />
    </Form>
  );
};

class FormExampleView2 extends Component {
  state = {
    i: 1,
  };
  render() {
    const {
      handleSubmit,
      controls,
      values,
    } = this.props;
    return (
      <Form>
        <Field {...controls.input} />
        <Field {...controls.input2} />
        <Field {...controls.input3} />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={() => this.setState({ i: this.state.i + 1 })}>{this.state.i}++</button>
        <DEV json={Math.random()} />
        <DEV json={values} />
      </Form>
    );
  }
}

const EmptyFormGroupForm = createForm({
  view: FormExampleView2,
  controls: ctrls,
  onSubmit: console.log,
});

const FormGroupForm = createForm({
  view: FormExampleView2,
  FormGroup,
  controls: ctrls,
  onSubmit: console.log,
});

const SimpleFormGroupForm = createForm({
  view: FormExampleView2,
  FormGroup: SimpleFormGroup,
  controls: ctrls,
  onSubmit: console.log,
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/formGroups', module)
    .add('EmptyFormGroup', () => {
      return (
        <Story>
          <EmptyFormGroupForm />
        </Story>
      );
    })
    .add('FormGroup', () => {
      return (
        <Story>
          <FormGroupForm />
        </Story>
      );
    })
    .add('SimpleFormGroupForm', () => {
      return (
        <Story>
          <SimpleFormGroupForm />
        </Story>
      );
    });

