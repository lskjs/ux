import React, { PureComponent } from 'react';
import { ValueBlock, Value } from './CollapsedMultiValue.styles';

class CollapsedMultiValue extends PureComponent {
  render() {
    const { selectProps } = this.props;
    return (
      <ValueBlock>
        Выбрано <Value>({selectProps.value.length})</Value>
      </ValueBlock>
    );
  }
}

export default CollapsedMultiValue;
