import React from 'react';
import PropTypes from 'prop-types';
import { Form, FastField } from 'formik';
import Story from '@lskjs/dev/Story/UappStory';
import createForm from '../../createForm';
import Password from './Password';
import FormDebug from '../../FormDebug';

const PasswordFormView = (props) => {
  const { control } = props;
  return (
    <Form>
      <FastField {...control('password')} />
      <FormDebug {...props} />
    </Form>
  );
};

PasswordFormView.propTypes = {
  control: PropTypes.func.isRequired,
};

const PasswordForm = createForm({
  view: PasswordFormView,
  controls: {
    password: {
      title: 'Password',
      component: Password,
      placeholder: 'Your password',
    },
  },
});

export default ({ storiesOf }) => (
  storiesOf('form/controls', module)
    .add('Password', () => (
      <Story>
        <PasswordForm />
      </Story>
    ))
);
