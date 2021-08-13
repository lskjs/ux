TextArea example:

```js
import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import FormSubmit from '../../FormSubmit';
import TextArea from './TextArea';

const TextAreaFormView = props => (
  <Form>
    <Field {...props.control('textarea')} />
    <FormSubmit {...props} />
  </Form>
);

const TextAreaForm = createForm({
  view: PhoneFormView,
  controls: {
    textarea: {
      title: 'textarea',
      component: TextArea,
      type: 'textarea',
      minRows: 5,
      placeholder: 'TextArea',
      required: true,
    },
  },
});

<Story>
  <TextAreaForm />
</Story>
```
