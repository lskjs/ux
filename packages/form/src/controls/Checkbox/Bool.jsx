import React from 'react';

const Bool = ({
  field,
  form,
  checked,
  value,
  componentClass: Component = 'div',
  onChange,
  validationState,
  children,
  ...props
}) => {
  const newProps = {};
  if (typeof value !== 'undefined' || typeof checked !== 'undefined') {
    newProps.checked = !!value || !!checked;
  } else if (field && typeof field.value !== 'undefined') {
    newProps.checked = !!field.value;
  }
  return (
    <Component
      {...props}
      {...newProps}
      value={value}
      onChange={(newValue) => {
        if (onChange) {
          onChange(newValue);
        } else if (form && field) {
          form.setFieldValue(field.name, newValue);
        }
      }}
      validationState={validationState || (field && form && form.errors[field.name] ? 'error' : null)}
    >
      {children}
    </Component>
  // </div>
  );
};

export default Bool;

