
import React from 'react';
import { Form, Field } from 'formik';
import styled from 'react-emotion';
import Story from '../../../Story';
import createForm from '../../createForm';
import PhoneInput2 from './PhoneInput2';
import Input from '../Input';
import FormDebug from '../../FormDebug';

const PhoneInput2FormView = (props) => {
  return (
    <Form>
      <Field {...props.control('input')} />
      <Field {...props.control('phone')} />
      <Field {...props.control('phone1')} />
      <Field {...props.control('phone2')} />
      <Field {...props.control('phone3')} />
      <Field {...props.control('phone4')} />
      <Container>
        <Field {...props.control('phone4')} />
      </Container>
      <FormDebug {...props} />
    </Form>
  );
};

const PhoneInput2InputForm = createForm({
  view: PhoneInput2FormView,
  controls: {
    input: {
      title: 'input',
      component: Input,
    },
    phone: {
      title: 'defaultCountry',
      component: PhoneInput2,
      defaultCountry: 'fr',
    },
    phone1: {
      title: 'Поиск по странам',
      component: PhoneInput2,
      defaultCountry: 'ru',
      enableSearchField: true,
    },
    phone3: {
      title: 'Регион и пример локализации',
      component: PhoneInput2,
      defaultCountry: 'fr',
      regions: 'europe',
      localization: { Germany: 'Deutschland', Spain: 'España' },
    },
    phone4: {
      title: 'Регион и пример локализации',
      component: PhoneInput2,
    },
  },
});


const Container = styled.div`
  .flag-dropdown{
    border: 1px solid #1890ff;
    background: none;
  }
  .form-control:focus{
    font-size: 1.1em;
  }
`;


export default ({ storiesOf }) => (
  storiesOf('Form2/controls', module)
    .add('PhoneInput2', () => (
      <Story>
        <PhoneInput2InputForm
          initialValues={{
            input: '+7 (917) 123 1234',
            phone: '+7 (917) 123 1234',
            phone6: 'uhuhuhuhuht',
          }}
        />
      </Story>
    ))
);
