Percentslider example:

```js
import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import FormSubmit from '../../FormSubmit';
import Percentslider from './Percentslider';

const PercentsliderFormView = props => (
  <Form>
    <Field {...props.control('slider')} />
    <FormSubmit {...props} />
  </Form>
);

const PercentsliderForm = createForm({
  view: PercentsliderFormView,
  controls: {
    slider: {
      title: 'PercentSlider',
      component: PercentSlider,
    },
  },
});

<Story>
  <PercentsliderForm />
</Story>
```
