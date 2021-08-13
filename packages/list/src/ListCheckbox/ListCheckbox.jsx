import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React from 'react';

import CheckboxCheckedIcon from '../icons/CheckboxCheckedIcon';
import CheckboxIndeterminateIcon from '../icons/CheckboxIndeterminateIcon';
import CheckboxUncheckedIcon from '../icons/CheckboxUncheckedIcon';
import { Base, CheckboxView } from './ListCheckbox.styles';

const ListCheckbox = ({ selectStore, item, global }) => {
  const isIndeterminate = global && selectStore.globalIsIndeterminate();
  const isChecked = global ? selectStore.globalIsChecked() : selectStore.isChecked(item);
  let icon = <CheckboxUncheckedIcon />;
  if (isIndeterminate) {
    icon = <CheckboxIndeterminateIcon />;
  }
  if (isChecked) {
    icon = <CheckboxCheckedIcon />;
  }

  function handleChange(event) {
    event.preventDefault();
    if (global) {
      selectStore.globalToggle();
    } else {
      selectStore.toggle(item);
    }
  }

  return (
    <Base onClick={handleChange}>
      <CheckboxView isChecked={isIndeterminate || isChecked}>{icon}</CheckboxView>
    </Base>
  );
};

ListCheckbox.propTypes = {
  selectStore: PropTypes.objectOf(Object).isRequired,
  item: PropTypes.objectOf(Object),
  global: PropTypes.bool,
};

ListCheckbox.defaultProps = {
  item: null,
  global: false,
};

export default inject('selectStore')(observer(ListCheckbox));
