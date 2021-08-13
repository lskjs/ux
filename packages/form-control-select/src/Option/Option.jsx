import isEqual from 'lodash.isequal';
import pick from 'lodash.pick';
import React, { Component } from 'react';

// import PropTypes from 'prop-types';
import { IconWrapper, Image, OptionItem, Title } from './Option.styles';

// import omit from 'lodash/omit';

class Option extends Component {
  static sCUFields = ['value', 'isDisabled', 'isFocused', 'label', 'isSelected'];
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
      isFocused,
      isSelected,
      selectOption,
      theme,
      // ...props
    } = this.props;
    const { Icon } = data;
    // console.log({ Icon, props });
    let ImageComponent = data.image;
    if (typeof data.image === 'string') ImageComponent = <Image src={data.image} />;
    return (
      <OptionItem onClick={() => selectOption(data)} focused={isFocused} selected={isSelected} type="button">
        {!!data.image && <ImageComponent />}
        {(!!data.icon || !!Icon) && (
          <IconWrapper color={data.iconColor || theme.colors.secondary}>
            {isSelected && data.iconActive ? data.iconActive : Icon ? <Icon /> : data.icon}
          </IconWrapper>
        )}
        <Title>{data.label}</Title>
      </OptionItem>
    );
  }
}

export default Option;
