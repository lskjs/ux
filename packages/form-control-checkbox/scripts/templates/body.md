Checkbox example:

```js
import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import FormSubmit from '../../FormSubmit';
import Checkbox from './Checkbox';

const CheckboxFormView = props => (
  <Form>
    <Field {...props.control('checkbox')} />
    <FormSubmit {...props} />
  </Form>
);

const CheckboxForm = createForm({
  view: CheckboxFormView,
  controls: {
    checkbox: {
      component: Checkbox,
      view: 'checkbox',
      label: 'test',
      info: 'this is info',
      block: true,
    },
  },
});

<Story>
  <CheckboxForm />
</Story>
```
