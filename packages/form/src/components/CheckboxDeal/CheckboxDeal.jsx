import React, { Component } from 'react';
import If from 'react-if';
import T from '@lskjs/ui/T';
import { BaseCheckbox as Checkbox } from '../../controls/Checkbox';

import {
  Block,
  CheckBoxWrapper,
  Title,
} from './CheckboxDeal.styles';

class CheckboxDeal extends Component {
  render() {
    const {
      checked, onChange, item,
    } = this.props;
    return (
      <Block
        active={checked}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (onChange) onChange(item._id);
        }}
      >
        <CheckBoxWrapper>
          <Checkbox
            checked={checked}
            onChange={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}
          />
        </CheckBoxWrapper>
        <Title>
          {item.title}
        </Title>
      </Block>
    );
  }
}

export default CheckboxDeal;
