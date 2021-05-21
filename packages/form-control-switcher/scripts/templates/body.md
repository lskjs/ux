Switcher example:

```js
import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import FormSubmit from '../../FormSubmit';
import Switcher from './Switcher';

const SwitcherFormView = props => (
  <Form>
    <Field {...props.control('switcher')} />
    <FormSubmit {...props} />
  </Form>
);

const SwitcherForm = createForm({
  view: SwitcherFormView,
  controls: {
    switcher: {
      title: '1. switcher',
      component: Switcher,
      label: 'This is switcher',
    },
  },
});

<Story>
  <SwitcherForm />
</Story>
```
