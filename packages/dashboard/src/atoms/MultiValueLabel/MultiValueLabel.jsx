import React, { PureComponent } from 'react';
import T from '@lskjs/ui/T';
import { MultiValue, Value } from './MultiValueLabel.styles';

class MultiValueLabel extends PureComponent {
  render() {
    const { selectProps } = this.props;
    return (
      <MultiValue>
        <T name="filterCheckboxItem.selected" /> <Value>({selectProps.value.length})</Value>
      </MultiValue>
    );
  }
}

export default MultiValueLabel;
