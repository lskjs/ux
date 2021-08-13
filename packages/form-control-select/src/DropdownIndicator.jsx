import { observer } from 'mobx-react';
import React from 'react';
import { components } from 'react-select';

const DropdownIndicator = (props) => {
  const { selectProps } = props;
  let arrow;
  if (selectProps.menuIsOpen) {
    arrow = (
      <i
        style={{
          border: 'solid #4a4a4a',
          borderWidth: '0 2.5px 2.5px 0',
          display: 'inline-block',
          padding: 2.5,
          transform: 'rotate(-135deg)',
        }}
      />
    );
  } else {
    arrow = (
      <i
        style={{
          border: 'solid #4a4a4a',
          borderWidth: '0 2.5px 2.5px 0',
          display: 'inline-block',
          padding: 2.5,
          transform: 'rotate(45deg)',
        }}
      />
    );
  }
  return <components.DropdownIndicator {...props}>{arrow}</components.DropdownIndicator>;
};

export default observer(DropdownIndicator);
