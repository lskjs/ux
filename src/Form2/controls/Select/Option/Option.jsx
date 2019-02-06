import React, { Component } from 'react';
import { withTheme } from 'emotion-theming';
import isEqual from 'lodash/isEqual';
import pick from 'lodash/pick';
// import PropTypes from 'prop-types';
import { OptionItem, Image, IconWrapper, Title } from './Option.styles';

// import omit from 'lodash/omit';

@withTheme
class Option extends Component {
  static sCUFields = [
    'value',
    'isDisabled',
    'isFocused',
    'label',
    'isSelected',
  ]
  shouldComponentUpdate(nextProps) {
    const { props } = this;
    const { sCUFields } = this.constructor;
    const params = pick(props, sCUFields);
    const nextParams = pick(nextProps, sCUFields);
    return !isEqual(params, nextParams);
  }
  render() {
    const {
      // className,
      data,
      onFocus,
      isSelected,
      selectOption,
      theme,
      // ...props
    } = this.props;
    return (
      <OptionItem
        onClick={() => selectOption(data)}
        onFocus={onFocus}
        selected={isSelected}
      >
        <If condition={data.image}>
          {typeof data.image === 'string' ? <Image src={data.image} /> : data.image}
        </If>
        <If condition={data.icon}>
          <IconWrapper color={data.iconColor || theme.colors.secondary}>
            {(isSelected && data.iconActive) ? data.iconActive : data.icon}
          </IconWrapper>
        </If>
        <Title>
          {data.label}
        </Title>
      </OptionItem>
    );
  }
}

export default Option;
