import React from 'react';
import get from 'lodash/get';
import Help from 'react-icons2/mdi/help-circle';
import CheckBoxBase from 'antd/lib/checkbox';
import Tooltip from '../../Tooltip';

const CheckBox = ({
  field,
  form,
  ...props
}) => {
  return (
    <div>
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
        // checked={get(form.values, field.name)}
      />
      {props.icon && props.icon}
      {console.log(props, field)}
      <span className="checkbox-title">{props.label}</span>
      {props.control && props.control.help && (
        <Tooltip id={field.name} place="bottom" overlay={props.control.help}>
          <span className="checkbox-help"><Help /></span>
        </Tooltip>
      )}
    </div>
  );
};

export default CheckBox;

