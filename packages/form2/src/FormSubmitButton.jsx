// import Button from '@lskjs/button'; // TODO: подумать
import T from '@lskjs/t';
import React from 'react';

const buttonStyle = {
  backgroundColor: '#ffffff',
  border: 'none',
  boxShadow: '0 0 0 1px',
  outline: 'none',
  borderRadius: '4px',
  overflow: 'hidden',
  position: 'relative',
  textAlign: 'center',
  justifyContent: 'center',
  webkitAppearance: 'none !important',
  textDecoration: 'none !important',
  display: 'inline-block',
};

const FormSubmitButton = ({
  componentClass: Component = () => <button style={buttonStyle} />,
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
