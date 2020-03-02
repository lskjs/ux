import React from 'react';
import { observer } from 'mobx-react';
import { components } from 'react-select';
import Down from 'react-icons2/mdi/chevron-down';
import Up from 'react-icons2/mdi/chevron-up';

const DropdownIndicator = props => {
  const { selectProps } = props;
  let arrow;
  if (selectProps.menuIsOpen) {
    arrow = <Up size="2em" />;
  } else {
    arrow = <Down size="2em" />;
  }
  return <components.DropdownIndicator {...props}>{arrow}</components.DropdownIndicator>;
};

export default observer(DropdownIndicator);
