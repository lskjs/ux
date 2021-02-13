import React, { Component } from 'react';
import { Form, Field } from 'formik';

import DEV from '@lskjs/dev/DEV';
import Button from '@lskjs/button';
import Story from './Story';
import createForm from '../createForm';
import FormGroup from '../FormGroup';
import FormItem from '../components/FormItem';
import SimpleFormGroup from '../SimpleFormGroup';
import Input from '../controls/Input';

const SimpleInput = ({ form, field, ...props }) => (
  <input
    {...field}
    {...props}
    // onChange={(e) => {
    //   console.log('input.onChange', e);
    // }}
  />
);

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
    component: SimpleInput,
    placeholder: 'offer.placeholders.title',
  },
};

const FormExampleView = (props) => {
  const { handleSubmit, control, values } = props;
  return (
    <Form className="ant-form ant-form-horizontal">
      <Field {...control('input')} />
      <Field {...control('input2')} />
      <Field {...control('input3')} />
      <FormItem>
        <Button paint="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </FormItem>
      <DEV json={values} />
    </Form>
  );
};

class DebugFormExampleView extends Component {
  state = {
    i: 1,
  };
  render() {
    const { handleSubmit, control, values } = this.props;
    return (
      <Form>
        <Field {...control('input')} />
        <Field {...control('input2')} />
        <Field {...control('input3')} />
        <FormItem>
          <Button paint="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </FormItem>
        <hr />
        <DEV json={Math.random()} />
        <button onClick={() => this.setState({ i: this.state.i + 1 })}>
          {this.state.i}
          ++
        </button>
        <DEV json={values} />
      </Form>
    );
  }
}

const EmptyFormGroupForm = createForm({
  view: DebugFormExampleView,
  controls: ctrls,
  onSubmit: console.log, // eslint-disable-line no-console
});

const FormGroupForm = createForm({
  view: DebugFormExampleView,
  FormGroup,
  controls: ctrls,
  onSubmit: console.log, // eslint-disable-line no-console
});
const FormGroupForm2 = createForm({
  view: FormExampleView,
  FormGroup,
  controls: ctrls,
  onSubmit: console.log, // eslint-disable-line no-console
});

const SimpleFormGroupForm = createForm({
  view: DebugFormExampleView,
  FormGroup: SimpleFormGroup,
  controls: ctrls,
  onSubmit: console.log, // eslint-disable-line no-console
});

export default ({ storiesOf }) =>
  storiesOf('form/FormGroup', module)
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
    .add('FormGroupForm2', () => {
      return (
        <Story>
          <FormGroupForm2 />
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
