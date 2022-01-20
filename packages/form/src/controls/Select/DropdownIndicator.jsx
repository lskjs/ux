import { observer } from 'mobx-react';
import React from 'react';
import Down from 'react-icons2/mdi/chevron-down';
import Up from 'react-icons2/mdi/chevron-up';
import { components } from 'react-select';

const DropdownIndicator = (props) => {
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
