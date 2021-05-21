import React from 'react';

import Bool from './Bool';
import ExtendedCheckblock from './ExtendedCheckblock';

const BaseExtendedCheckblock = ({ checked, view, ...props }) => (
  <ExtendedCheckblock
    {...props}
    type={view}
    value={checked}
    // onChange={({ target: { checked } }) => onChange(checked)}
    // onChange={value => onChange(value.target.checked)}
  />
);

export const CheckBlock = (props) => <Bool {...props} componentClass={BaseExtendedCheckblock} />;
export default CheckBlock;
