import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import Switcher from './Switcher';
import FormDebug from '../../FormDebug';

const SwitcherFormView = props => (
  <Form>
    <Field {...props.control('switcher')} />
    <Field {...props.control('switcher2')} />
    <Field {...props.control('switcher3')} />
    <Field {...props.control('switcher4')} />
    <Field {...props.control('switcher5')} />
    <FormDebug {...props} />
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
    switcher2: {
      title: '2. disabled switcher',
      component: Switcher,
      label: 'This is switcher',
      disabled: true,
    },
    switcher3: {
      title: '3. switcher with label when checked',
      component: Switcher,
      label: 'Unchecked',
      checkedTitle: 'Checked',
    },
    switcher4: {
      title: '4. switcher text on the right side',
      component: Switcher,
      label: 'This is switcher',
      reversed: true,
    },
    switcher5: {
      title: '5. switcher with custom style',
      component: Switcher,
      label: 'This is switcher',
      styleSwitcher: {
        backgroundColor: 'red',
      },
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls', module)
    .add('Switcher ', () => {
      return (
        <Story>
          <SwitcherForm />
        </Story>
      );
    });
