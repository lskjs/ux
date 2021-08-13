import { inject, observer } from 'mobx-react';
import React from 'react';

import { contextToProps } from './List.context';

const ListSelectRow = ({ List, selectStore, item, componentClass, className, ...props }) => {
  function handleClick() {
    selectStore.toggle(item);
  }

  if (!selectStore.items.length) {
    return <List.HoverRow componentClass={componentClass} className={className} {...props} />;
  }
  const checked = selectStore.isChecked(item);
  return (
    <List.SelectRowWrapper className={className} onClick={handleClick} checked={checked}>
      {props.children}
    </List.SelectRowWrapper>
  );
};

export default contextToProps('List')(inject('selectStore')(observer(ListSelectRow)));
