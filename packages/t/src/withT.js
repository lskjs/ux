import React from 'react';
import { inject, observer } from 'mobx-react';

const withT = (Component, fn = a => a) => inject('i18')(observer(props => React.createElement(Component, fn(props))));

export default withT;
