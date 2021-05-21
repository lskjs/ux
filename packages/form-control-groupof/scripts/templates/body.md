GroupOf example:

```js
import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import FormSubmit from '../../FormSubmit';
import GroupOf from './GroupOf';

const Radio = () => <input type="radio" id="radioButton" />;

const GroupOfFormView = props => (
  <Form>
    <Field {...props.control('groupof')} />
    <FormSubmit {...props} />
  </Form>
);

const GroupOfForm = createForm({
  view: GroupOfFormView,
  controls: {
    groupof: {
      component: GroupOf,
      itemComponent: Radio,
      title: 'Выбор одного элемента',
      required: true,
      options: ['One', 'Two', 'Three'],
    },
  },
});

<Story>
  <GroupOfForm />
</Story>
```
