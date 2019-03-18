import React from 'react';
import styled from 'react-emotion';
import PhoneInput from 'react-phone-input-2';

const Container = styled.div`
  .react-tel-input .flag-dropdown:hover .selected-flag{ 
    background: none; 
  }
  .react-tel-input .flag-dropdown.open-dropdown .selected-flag{
    background: none; 
  }
  .react-tel-input .country-list .country {
    padding: 0px 10px;
  } 
`;

export default ({ field, form, ...props }) => (
  <Container>
    <PhoneInput
      buttonStyle={{
      background: 'none',
      border: 'none',
      }}
      inputStyle={{
        width: '100%',
        border: 'solid 1px #e3e3e3',
        fontSize: '13px',
        paddingTop: '23px',
        paddingBottom: '23px',
        color: '#4a4a4a',
        borderRadius: '3px',
        background: 'none',
      }}
      dropdownStyle={{
        fontSize: '13px',
      }}
      defaultCountry="ru"
      {...field}
      {...props}
      value={(field.value || '').startsWith('+') ? field.value : `+${field.value}`}
      onChange={(value) => {
        form.setFieldValue(field.name, value.replace(/\D+/g, ''));
      }}
    />
  </Container>
);
