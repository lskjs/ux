import React, { useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Button from '@lskjs/button';
import EyeIcon from 'react-icons2/mdi/eye';
import EyeOffIcon from 'react-icons2/mdi/eye-off';
import BaseInput from '../../components/BaseInput';

const Password = ({ field, form, icon, hiddenIcon, ...props }) => {
  const hasError = get(field, 'name') && !!get(form, `errors.${field.name}`);
  const errorStyle = { border: '1px solid red' };
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <BaseInput
      {...field}
      value={field.value || ''}
      debounce={0}
      {...props}
      type={visiblePassword ? 'text' : 'password'}
      style={hasError ? errorStyle : {}}
      onChange={(value) => {
        form.setFieldValue(field.name, value);
      }}
      rightIcon={field.value && (
        <Button
          icon={visiblePassword ? hiddenIcon : icon}
          onClick={() => setVisiblePassword(!visiblePassword)}
        />
      )}
    />
  );
};

Password.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  field: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
  icon: PropTypes.elementType,
  hiddenIcon: PropTypes.elementType,
};

Password.defaultProps = {
  field: undefined,
  icon: <EyeIcon />,
  hiddenIcon: <EyeOffIcon />,
};

export default Password;
