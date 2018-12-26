import React from 'react';
import get from 'lodash/get';
import CheckBoxBase from 'antd/lib/checkbox';
import Tooltip from '~/Uapp/components/Tooltip';
import Help from 'react-icons2/mdi/help-circle';
import FormGroup from '../FormGroup';

const CheckBox = ({
  field,
  form,
  ...props
}) => {
  return (
    <FormGroup
      field={field}
      form={form}
      {...props}
    >
      <CheckBoxBase
        {...field}
        {...props}
        className="checkbox-icon"
        onChange={(val) => {
          field.onChange({
            target: {
              name: field.name,
              value: val,
            },
          });
        }}
        checked={get(form.values, field.name)}
      />
      {props.icon && props.icon}
      <span className="checkbox-title">{props.title || field.name}</span>
      {props.control && props.control.help && (
        <Tooltip id={field.name} place="bottom" overlay={props.control.help}>
          <span className="checkbox-help"><Help /></span>
        </Tooltip>
      )}
    </FormGroup>
  );
};

export default CheckBox;

