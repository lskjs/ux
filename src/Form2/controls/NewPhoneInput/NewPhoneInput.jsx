import React from 'react';
import styled from 'react-emotion';
import PhoneInput from 'react-phone-input-2';

const Container = styled.div`
  .flag-dropdown{
    border: 1px solid #1890ff;
    background: none;
  }
  .form-control:focus{
    font-size: 1.1em;
  }
`;

const CustomInputComponent = ({
  field,
  form,
  ...props
}) => {
  return (
    <Container>
      <PhoneInput
        {...field}
        {...props}
        value={(field.value || '').startsWith('+') ? field.value : `+${field.value}`}
        onChange={(value) => {
          form.setFieldValue(field.name, value.replace(/\D+/g, ''));
        }}
      />
    </Container>
  );
};

export default CustomInputComponent;
