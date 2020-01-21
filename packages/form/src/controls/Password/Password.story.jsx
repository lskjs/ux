import React from 'react';
import PropTypes from 'prop-types';
import { Form, FastField } from 'formik';
import Story from '@lskjs/dev/Story';
import Account from 'react-icons2/mdi/account';
import AccountOff from 'react-icons2/mdi/account-off';
import createForm from '../../createForm';
import Password from './Password';
import FormDebug from '../../FormDebug';

const PasswordFormView = (props) => {
  const { control } = props;
  return (
    <Form>
      <FastField {...control('defaultPassword')} />
      <FastField {...control('customPassword')} />
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
    defaultPassword: {
      title: 'Default Password',
      component: Password,
      placeholder: 'Your password',
    },
    customPassword: {
      title: 'Custom Password',
      component: Password,
      placeholder: 'Your password',
      icon: <Account />,
      hiddenIcon: <AccountOff />,
    },
  },
});

export default ({ storiesOf }) => (
  storiesOf('form/controls', module)
    .add('Password', () => (
      <Story>
        <PasswordForm
          onSubmit={(values) => {
            console.log(values);
          }}
        />
      </Story>
    ))
);
