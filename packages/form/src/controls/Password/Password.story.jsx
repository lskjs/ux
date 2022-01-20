import Story from '@lskjs/dev/Story/UappStory';
import { FastField, Form } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

import createForm from '../../createForm';
import FormDebug from '../../FormDebug';
import Password from './Password';

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

export default ({ storiesOf }) =>
  storiesOf('form/controls', module).add('Password', () => (
    <Story>
      <PasswordForm />
    </Story>
  ));
