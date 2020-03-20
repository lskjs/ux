import { inject, observer } from 'mobx-react';

const T = ({ i18, name, ...props }) => {
  const str = i18.t(name, props);
  // console.log('name', name, str);
  if (!str && __DEV__) return name;
  return str;
};

export default inject('i18')(observer(T));
