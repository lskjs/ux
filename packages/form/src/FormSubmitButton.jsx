import React from 'react';
import If from 'react-if';
import Button from '@lskjs/button';
import T from '@lskjs/t';

export default ({
  componentClass: Component = Button, errors, isSubmitting, status, children, ...props
}) => (
  <Component
    paint="primary"
    type="submit"
    state={status}
    disabled={!!status}
    {...props}
  >
    <If condition={!!isSubmitting}>
      <T name="buttons.waiting" />
    </If>
    <If condition={!isSubmitting}>
      {children || <T name="common.submit" />}
    </If>
  </Component>
);
