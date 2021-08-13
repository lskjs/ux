import Button from '@lskjs/button';
import T from '@lskjs/t';
import React from 'react';

export default ({ componentClass: Component = Button, isSubmitting, status, children, ...props }) => (
  <Component paint="primary" type="submit" state={status} disabled={!!status} {...props}>
    {isSubmitting ? <T name="lsk.form.waiting" /> : children || <T name="lsk.form.submit" />}
  </Component>
);
