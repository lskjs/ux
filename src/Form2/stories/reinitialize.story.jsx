import React, { Component } from 'react';
import { Form, Field } from 'formik';
import autobind from 'core-decorators/lib/autobind';

import Story from '../../Story';
import createForm from '../createForm';
import Input from '../controls/Input';
import Select from '../controls/Select';
import Tags from '../controls/Tags';
import FormDebug from '../FormDebug';
import FormGroup from '../FormGroup';

const InputFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.input} />
      <Field {...props.controls.input2} />
      <Field {...props.controls.select} />
      <Field {...props.controls.tags} />
      <FormDebug {...props} />
    </Form>
  );
};

const SampleForm = createForm({
  view: InputFormView,
  FormGroup,
  controls: {
    input: {
      title: 'Input',
      component: Input,
    },
    input2: {
      title: 'Input2',
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
      options: ['a', 'b', 'c'],
    },
  },
});

class Container extends Component {
  state = {
    input: 'demo',  // eslint-disable-line
  }
  @autobind
  handleChange(values) {
    this.setState(values);
  }
  render() {
    return (
      <div>
        <table>
          <tr>
            <td>
              <SampleForm
                enableReinitialize
                initialValues={this.state}
                onChange={this.handleChange}
              />
            </td>
            <td>
              <SampleForm
                enableReinitialize
                initialValues={this.state}
                onChange={this.handleChange}
              />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}


export default ({ storiesOf }) =>
  storiesOf('Form2', module)
    .add('reinitialize', () => {
      return (
        <Story>
          <Container />
        </Story>
      );
    });

