import React from 'react';
import { inject, observer } from '@lskjs/mobx';

export const withT = (Component, fn = (a) => a) =>
  inject('i18')(observer((props) => React.createElement(Component, fn(props))));

export default withT;
