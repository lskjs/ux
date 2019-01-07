import React, { Component } from 'react';
import Form from 'antd/lib/form';
import hash from 'object-hash';


class FormGroup extends Component {
  render() {
    const {
      field,
      form,
      children,
      ...props
    } = this.props;

    // {errors.twitter &&
    //   touched.twitter &&
    const errorMessage = form && form.errors && form.errors[field.name];
    const fieldId = `field__${hash(field.name)}`;
    return (
      <Form.Item
        htmlId={fieldId}
        key={fieldId}
        required={props.required}
        // label={field.heading ? field.heading.children : props.title}
        // label={props.label ? props.label : props.title}
        label={props.title}
        help={errorMessage || props.help}
        validateStatus={errorMessage ? 'error' : null}
      >
        {/* <div id={fieldId} className="smooth" /> */}
        {children}
      </Form.Item>
    );
  }
}

// export const createFormGroup  = () => ()

export default FormGroup;
