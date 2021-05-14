// import Button from '@lskjs/button'; // TODO: подумать
import T from '@lskjs/t';
import React from 'react';

const FormSubmitButton = ({
  componentClass: Component = () => <button />,
  isSubmitting,
  status,
  children,
  ...props
}) => (
  <Component paint="primary" type="submit" state={status} disabled={!!status} {...props}>
    {isSubmitting ? <T name="lsk.form.waiting" /> : children || <T name="lsk.form.submit" />}
  </Component>
);

export default FormSubmitButton;
