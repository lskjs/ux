import hash from 'object-hash';
import React from 'react';

const SimpleFormGroup = ({ field, form, children, title, label, required, _required, help }) => {
  const errorMessage = form && form.errors && form.errors[field.name];
  const fieldId = `field__${hash(field.name)}`;
  const style = {};
  if (errorMessage) style.color = '#ff0000';
  return (
    <div key={fieldId} style={style}>
      <div id={fieldId} className="smooth" />
      <h4>{label || `${title}${required || _required ? ' *' : ''}`}</h4>
      <div>
        {children}
        {errorMessage && <div>{errorMessage}</div>}
        {help && <div>{help}</div>}
      </div>
    </div>
  );
};

export default SimpleFormGroup;
