import T from '@lskjs/t';
import isEqual from 'lodash.isequal';
import pick from 'lodash.pick';
import React, { Component } from 'react';

import { Value, ValueBlock } from './CollapsedMultiValue.styles';

class CollapsedMultiValue extends Component {
  static sCUFields = ['isDisabled', 'isFocused', 'isSelected', 'selectProps.value'];
  shouldComponentUpdate(nextProps) {
    const { props } = this;
    const { sCUFields } = this.constructor;
    const params = pick(props, sCUFields);
    const nextParams = pick(nextProps, sCUFields);
    // lodash.pick can not get nested path 'selectProps.value'
    return !isEqual(params, nextParams) || !isEqual(props.selectProps.value, nextProps.selectProps.value);
  }
  render() {
    const { getValue } = this.props;
    const value = getValue();
    return (
      <ValueBlock>
        <T name="lskjsForm.MultiValueSelected" /> <Value>({value.length})</Value>
      </ValueBlock>
    );
  }
}

export default CollapsedMultiValue;
