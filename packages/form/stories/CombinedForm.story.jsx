/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Form, Field } from 'formik';
import get from 'lodash/get';
import Story from './Story';
import createForm from '../createForm';
import Input from '../controls/Input';
import PhoneInput from '../controls/PhoneInput';
import RadioButtonGroup from '../controls/RadioButtonGroup';
import FormDebug from '../FormDebug';

const Form1View = ({ control }) => (
  <Form>
    <Field {...control('legalType')} />
  </Form>
);

const Form1 = createForm({
  view: Form1View,
  enableReinitialize: true,
  validateOnChange: true,
  validateOnBlur: true,
  controls: {
    legalType: {
      component: RadioButtonGroup,
      options: [
        {
          value: 'individual',
          title: 'Физическое лицо',
        },
        {
          value: 'company',
          title: 'Юридическое лицо',
        },
      ],
    },
  },
});

const Form2View = ({ control, ...props }) => (
  <Form>
    <Field {...control('name')} />
    <FormDebug {...props} />
  </Form>
);

const Form2 = createForm({
  view: Form2View,
  controls: {
    name: {
      title: 'Имя',
      component: Input,
      _required: true,
      validator: {
        presence: {
          allowEmpty: false,
          message: 'not empty!',
        },
      },
    },
  },
});

const Form3View = ({ control, ...props }) => (
  <Form>
    <Field {...control('name')} />
    <Field {...control('phone')} />
    <FormDebug {...props} />
  </Form>
);

const Form3 = createForm({
  view: Form3View,
  enableReinitialize: true,
  validateOnChange: true,
  validateOnBlur: true,
  controls: {
    name: {
      title: 'Имя',
      component: Input,
      _required: true,
      validator: {
        presence: {
          allowEmpty: false,
          message: 'not empty!',
        },
      },
    },
    phone: {
      component: PhoneInput,
      title: 'Телефон',
      _required: true,
      defaultBehavior: true,
      validator: {
        checkValid: (_, values) => {
          let phone = get(values, 'phone', '');
          if (phone.charAt(0) !== '+') phone = `+${phone}`;
          const phoneNumber = {
            isValid: () => true,
          }
          if (phoneNumber && phoneNumber.isValid()) {
            return '';
          }
          return 'Плохой номер';
        },
      },
    },
  },
});

const Component = ({ initialValues, onSubmit, ...props }) => {
  const [initValues, setInitValues] = useState(initialValues);

  const resetLegalType = () => {
    setInitValues({ ...initialValues });
  };

  const handleSubmitForm = async (values, form) => {
    console.log(values.phone);
    if (onSubmit) {
      const newValues = await onSubmit(
        {
          ...values,
          legalType: initValues.legalType,
        },
        form,
      );
      console.log(newValues);
    }
  };

  return (
    <div>
      <Form1
        initialValues={{ legalType: initValues.legalType }}
        onChange={({ legalType }) => {
          setInitValues({ ...initValues, legalType });
        }}
      />
      {get(initValues, 'legalType') === 'company' && (
        <Form2
          {...props}
          initValues={initValues}
          resetLegalType={resetLegalType}
          initialValues={initialValues}
          onSubmit={handleSubmitForm}
        />
      )}
      {get(initValues, 'legalType') === 'individual' && (
        <Form3
          {...props}
          initValues={initValues}
          resetLegalType={resetLegalType}
          initialValues={initialValues}
          onSubmit={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default ({ storiesOf }) =>
  storiesOf('form/CombinedForm', module).add('default', () => {
    const submitHandler = async (data) => {
      const values = data;
      console.log(values);

      const res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(values);
        }, 2000);
      });
      return res;
    };

    const init = {
      name: 'Иван',
    };
    return (
      <Story>
        <Component initialValues={init} onSubmit={submitHandler} />
      </Story>
    );
  });
