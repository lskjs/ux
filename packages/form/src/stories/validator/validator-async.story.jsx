import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import InputComponent from '../../controls/Input';
import FormDebug from '../../FormDebug';


const ValidationView = (props) => {
  const {
    isSubmitting,
    controls,
  } = props;
  return (
    <Form>
      <Field {...props.control('email')}  disabled={isSubmitting} />
      <Field {...props.control('password')} />
      {/* <Field {...control('password) disabled={isSubmitting')} /> */}
      <p>
        Existing emails: some@email.com, someasync@email.com
      </p>
      <FormDebug {...props} />
    </Form>
  );
};

const checkEmail = async (data) => {
  return new Promise(((resolve, reject) => {
    setTimeout(() => {
      if (data === 'someasync@email.com') {
        reject(new Error('email already exists'));
      } else {
        resolve();
      }
    }, 1000);
  }));
};

const checkUrl = async (data) => {
  const regex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#-]+\/?)*$/;

  return new Promise(((resolve, reject) => {
    setTimeout(() => {
      if (!data.match(regex)) {
        reject(new Error('Not url!'));
      } else {
        resolve();
      }
    }, 1000);
  }));
};

const ValidationAsync = createForm({
  view: ValidationView,
  controls: {
    email: {
      title: 'email',
      component: InputComponent,
      placeholder: 'email async placeholder',
      validator: {
        // asyncValidator: true,
        presence: {
          allowEmpty: false,
        },
        checkEmail: (value) => {
          if (value === 'some@email.com') return 'email already exists';
          return '';
        },
        checkUrlAsync: async (value) => {
          try {
            return checkUrl(value);
          } catch (err) {
            return err.message;
          }
        },
        checkEmailAsync: async (value) => {
          try {
            return checkEmail(value);
          } catch (err) {
            return err.message;
          }
        },
      },
    },
    password: {
      title: 'password',
      component: InputComponent,
      placeholder: 'password placeholder',
      type: 'password',
      validator: {
        presence: {
          allowEmpty: false,
        },
      },
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/validator', module)
    .add('async validator', () => {
      return (
        <Story>
          <ValidationAsync
            onSubmit={(values) => {
              console.log({ values });
            }}
          />
        </Story>
      );
    });
