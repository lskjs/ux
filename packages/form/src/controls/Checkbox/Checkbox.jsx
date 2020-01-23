import React from 'react';
import PropTypes from 'prop-types';
import AntCheckbox from 'antd/lib/checkbox';
import Label, { globalStyle } from './Checkbox.styles';
import Bool from './Bool';

globalStyle();

export const BaseCheckbox = ({ onChange, validationState, value, checked, ...props }) => (
  <AntCheckbox
    {...props}
    checked={checked || value}
    onChange={({ target: { checked: checkedValue } }) => onChange(checkedValue)}
    // onChange={value => onChange(value.target.checked)}
  >
    <Label validationState={validationState}>
      {props.label}
    </Label>
  </AntCheckbox>
);

BaseCheckbox.propTypes = {
  name: PropTypes.string,
};

BaseCheckbox.defaultProps = {
  name: 'checkbox',
};

export default props => <Bool {...props} componentClass={BaseCheckbox} />;
