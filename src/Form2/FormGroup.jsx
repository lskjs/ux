import React, { Component } from 'react';
import FormItem from '~/UI/FormItem';
import hash from 'object-hash';
import Heading from './Heading';

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
    return (
      <FormItem
        key={fieldId}
        error={!!errorMessage}
      >
        <div id={fieldId} className="smooth" />
        <If condition={field.heading}>
          <Heading
            field={field}
            form={form}
            {...props}
          />
        </If>
        <If condition={!field.heading}>
          <FormItem.Title required={props.required}>
            {props.title}
          </FormItem.Title>
        </If>
        {/* {field.heading
          ? this.renderFormHeading(field)
          : this.renderControlLabel(field)} */}
        <FormItem.Content>
          {children}
          <If condition={!!errorMessage}>
            <FormItem.Help>
              {errorMessage}
            </FormItem.Help>
          </If>
          <If condition={props.help}>
            <FormItem.Help>
              {props.help}
            </FormItem.Help>
          </If>
        </FormItem.Content>
      </FormItem>
    );
  }
}

export default FormGroup;
