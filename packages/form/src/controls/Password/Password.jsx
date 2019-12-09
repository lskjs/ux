import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import BaseInput from '../../components/BaseInput';

const Password = ({ field, form, ...props }) => {
  const hasError = get(field, 'name') && !!get(form, `errors.${field.name}`);
  const errorStyle = { border: '1px solid red' };
  return (
    <BaseInput
      {...field}
      value={field.value || ''}
      debounce={0}
      {...props}
      type="password"
      style={hasError ? errorStyle : {}}
      onChange={(value) => {
        form.setFieldValue(field.name, value);
      }}
    />
  );
};

Password.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  field: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
};

Password.defaultProps = {
  field: undefined,
};

export default Password;
