import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Bool from './Bool';
import Label, { Base, CheckboxView } from './Checkbox.styles';
import CheckboxCheckedIcon from './icons/CheckboxCheckedIcon';
import CheckboxUncheckedIcon from './icons/CheckboxUncheckedIcon';

export const BaseCheckbox = ({ onChange, validationState, checked, ...props }) => {
  const [isChecked, setIsChecked] = useState(checked);
  let icon = <CheckboxUncheckedIcon />;
  if (isChecked) {
    icon = <CheckboxCheckedIcon />;
  }

  function handleChange(event) {
    event.preventDefault();
    if (onChange) {
      onChange(!isChecked);
    }
    setIsChecked(!isChecked);
  }
  return (
    <>
      <Label validationState={validationState}>{props.label}</Label>
      <Base onClick={handleChange}>
        <CheckboxView isChecked={checked}>{icon}</CheckboxView>
      </Base>
    </>
  );
};

BaseCheckbox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  validationState: PropTypes.oneOf(['success', 'warning', 'error']),
};

BaseCheckbox.defaultProps = {
  name: 'checkbox',
  checked: false,
  onChange: null,
  validationState: null,
};

export const Checkbox = (props) => <Bool {...props} componentClass={BaseCheckbox} />;
export default Checkbox;
