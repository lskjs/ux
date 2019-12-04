import React from 'react';
import { Form, FastField } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import ArrayOf from './ArrayOf2';
import Input from '../Input/Input';
import FormDebug from '../../FormDebug';

const ArrayOfFormView = props => (
  <Form>
    <FastField {...props.control('inputArray')} />
    <FormDebug {...props} />
  </Form>
);

const ArrayOfForm = createForm({
  view: ArrayOfFormView,
  controls: {
    inputArray: {
      title: 'inputArray3',
      component: ArrayOf,
      itemComponent: Input,
      showRemoveButton: true,
      showAddButton: true,
      placementRemoveButton: 'right',
    },
  },
});

export default ({ storiesOf }) => storiesOf('form/controls', module)
  .add('ArrayOf2', () => (
    <Story>
      <ArrayOfForm
        initialValues={{
          inputArray: [
            1122221,
            222222,
          ],
        }}
      />
    </Story>
  ));
