import React from 'react';
import { Form, FastField } from 'formik';
import Story from '@lskjs/dev/Story';
import FormDebug from '../../FormDebug';
import createForm from '../../createForm';
import CodeInput from './CodeInput';

// eslint-disable-next-line react/prop-types
const CodeInputFormView = ({ control, ...props }) => (
  <Form>
    <FastField {...control('code4digitsWithFocus')} />
    <FastField {...control('code4digits')} />
    <FastField {...control('code6digits')} />
    <FastField {...control('code4digitsWithDefault')} />
    <FormDebug {...props} />
  </Form>
);

const CodeInputForm = createForm({
  view: CodeInputFormView,
  controls: {
    code4digits: {
      title: 'code4digits',
      component: CodeInput,
    },
    code6digits: {
      title: 'code6digits',
      component: CodeInput,
      count: 6,
    },
    code4digitsWithDefault: {
      title: 'code4digitsWithDefault',
      component: CodeInput,
    },
    code4digitsWithFocus: {
      title: 'code4digitsWithFocus',
      component: CodeInput,
      autoFocus: true,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls', module).add('CodeInput', () => (
    <Story>
      <CodeInputForm
        initialValues={{
          code4digitsWithDefault: 3920,
        }}
      />
    </Story>
  ));
