import { Global } from '@emotion/react';
import AntCheckbox from 'antd/lib/checkbox';
import PropTypes from 'prop-types';
import React from 'react';

import Bool from './Bool';
import Label, { globalStyles } from './Checkbox.styles';

export const BaseCheckbox = ({ onChange, validationState, ...props }) => (
  <>
    <Global styles={globalStyles} />
    <AntCheckbox
      {...props}
      onChange={({ target: { checked } }) => onChange(checked)}
      // onChange={value => onChange(value.target.checked)}
    >
      <Label validationState={validationState}>{props.label}</Label>
    </AntCheckbox>
  </>
);

BaseCheckbox.propTypes = {
  name: PropTypes.string,
};

BaseCheckbox.defaultProps = {
  name: 'checkbox',
};

export default (props) => <Bool {...props} componentClass={BaseCheckbox} />;
