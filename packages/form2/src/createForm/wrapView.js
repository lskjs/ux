import React from 'react';
import avoidNestedFields from './avoidNestedFields';
import DEBUG from './_debug';

export default ({ View, Wrapper, props: staticProps, flatten }) => (props) => {
  const mergedProps = { ...staticProps, ...props };
  if (DEBUG) console.log('wrapView create render', { staticProps, props }); // eslint-disable-line no-console

  const formView = React.createElement(View, { ...staticProps, ...props, key: 'formView' });
  const { onChange } = mergedProps;
  if (!onChange) return formView;
  if (flatten) {
    mergedProps.onChange = (values, ...args) => {
      onChange(avoidNestedFields(values), ...args);
    };
  }
  return React.createElement(Wrapper, mergedProps, formView);
};
