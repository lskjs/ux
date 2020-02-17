
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { Row, Col } from '@lskjs/ui/Grid';
import CheckBlock from '../CheckBlock';
import checkBlockStyle from './CheckBlockList.style';

const CheckBlockList = ({ field, form, options, onChange, cols, htmlId }) => (
  <Row id={htmlId} style={{ margin: 0, border: 'solid 1px #e3e3e3' }}>
    {(options || []).map(item => (
      <Col
        key={item.value}
        {...cols}
        style={{ padding: 0 }}
      >
        <CheckBlock
          label={item.title}
          className={checkBlockStyle}
          checked={get(field, 'value', []).includes(item.value)}
          onChange={(checked) => {
            let newValue = get(field, 'value', []);
            if (checked) {
              newValue.push(item.value);
            } else {
              newValue = newValue.filter(e => e !== item.value);
            }
            if (form && field) {
              form.setFieldValue(field.name, newValue);
            }
            if (onChange) onChange(newValue);
          }}
        />
      </Col>
    ))}
  </Row>
);

CheckBlockList.propTypes = {
  onChange: PropTypes.func,
  field: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  form: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.any,
    value: PropTypes.any,
  })),
  htmlId: PropTypes.string.isRequired,
  cols: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

CheckBlockList.defaultProps = {
  onChange: null,
  options: [],
  cols: {},
};

export default CheckBlockList;
