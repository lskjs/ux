CheckBlock example:

```js
import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import FormSubmit from '../../FormSubmit';
import CheckBlock from './CheckBlock';

const CheckBlockFormView = props => (
  <Form>
    <Field {...props.control('radio')} />
    <Field {...props.control('checkbox')} />
    <FormSubmit {...props} />
  </Form>
);

const CheckBlockForm = createForm({
  view: PhoneFormView,
  controls: {
    radio: {
      component: CheckBlock,
      view: 'radio',
      label: 'test',
      info: 'this is info',
      block: true,
    },
    checkbox: {
      component: CheckBlock,
      view: 'checkbox',
      label: 'test',
      info: 'this is info',
      block: true,
    },
  },
});

<Story>
  <CheckBlockForm />
</Story>
```
