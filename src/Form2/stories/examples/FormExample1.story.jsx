import React from 'react';
import { Form, FastField } from 'formik';

import Story from '../../../Story';
import DEV from '../../../DEV';
import createForm from '../../createForm';
import Input from '../../../Input';
import LightFormGroup from '../../LightFormGroup';
import TagsPicker from '../../controls/TagsPicker';

import '../../../antd.g.css';
import '../../../bootstrap.g.css';

const FormExample1View = (props) => {
  const {
    handleSubmit,
    controls,
    values,
  } = props;
  return (
    <Form>
      <FastField {...controls.input} />
      <FastField {...controls.tagsPicker} />
      <DEV json={values} />
      <button onClick={handleSubmit}>Submit</button>
    </Form>
  );
};

const FormExample1 = createForm({
  view: FormExample1View,
  FormGroup: LightFormGroup,
  controls: {
    input: {
      title: 'input',
      component: Input,
      placeholder: 'offer.placeholders.title',
    },
    tagsPicker: {
      title: 'tagsPicker',
      component: TagsPicker,
      triggerTitle: 'Выбрать теги',
      flat: true,
      fields: [
        {
          _id: '1',
          value: 'one',
          title: 'Один',
        },
        {
          _id: '2',
          value: 'two',
          title: 'Два',
        },
        {
          _id: '3',
          value: 'three',
          title: 'Три',
        },
        {
          _id: '4',
          value: 'four',
          title: 'Четыре',
        },
      ],
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/stories/examples', module)
    .add('FormExample', () => {
      return (
        <Story>
          <FormExample1 />
        </Story>
      );
    });
