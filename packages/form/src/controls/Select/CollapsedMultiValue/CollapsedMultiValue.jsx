import React, { Component } from 'react';
import isEqual from 'lodash/isEqual';
import pick from 'lodash/pick';
import T from '@lskjs/t';
import { ValueBlock, Value } from './CollapsedMultiValue.styles';

class CollapsedMultiValue extends Component {
  static sCUFields = ['isDisabled', 'isFocused', 'selectProps.value', 'isSelected'];
  shouldComponentUpdate(nextProps) {
    const { props } = this;
    const { sCUFields } = this.constructor;
    const params = pick(props, sCUFields);
    const nextParams = pick(nextProps, sCUFields);
    return !isEqual(params, nextParams);
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
