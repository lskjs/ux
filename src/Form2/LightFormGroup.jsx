import React, { Component } from 'react';
import hash from 'object-hash';

class FormGroup extends Component {
  render() {
    const {
      field,
      form,
      children,
      ...props
    } = this.props;
    const errorMessage = form.errors[field.name];
    const fieldId = `field__${hash(field.name)}`;
    const style = {};
    if (errorMessage) style.color = '#ff0000';
    return (
      <div
        key={fieldId}
        style={style}
      >
        <div id={fieldId} className="smooth" />
        <h4>
          {props.title}{props.required ? ' *' : ''}
        </h4>
        <div>
          {children}
          {errorMessage && (
            <div>
              {errorMessage}
            </div>
          )}
          {props.help && (
            <div>
              {props.help}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default FormGroup;
