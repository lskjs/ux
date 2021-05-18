import filterProps from '@lskjs/utils/filterProps';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import DebounceInput from 'react-debounce-input';

import CloseIcon from '../icons/CloseIcon';
import SearchIcon from '../icons/SearchIcon';
import {
  Action,
  Actions,
  Block,
  Button as ButtonStyled,
  CloseButton,
  Count,
  Input,
} from './DefaultSearchComponent.styles';

const DefaultSearchComponent = ({ componentClass: Tag, current, max, actions, canClear, onClear, block, ...props }) => {
  const refInput = useRef();

  function handleChange(event) {
    const { onChange, value: propValue } = this.props;
    let value = '';
    if (typeof event === 'string') {
      value = event;
    } else if (event.target && event.target.value) {
      ({ value } = event.target);
    } else if (!event.target) {
      value = propValue;
    }
    if (onChange) onChange(value);
  }

  function handlePress(event) {
    if (event.keyCode === 13) {
      handleChange(event);
    }
  }

  function handleClick() {
    if (refInput.current) {
      handleChange(refInput.current.state.value);
    }
  }

  return (
    <Block block={block}>
      <ButtonStyled type="button" onClick={handleClick}>
        <SearchIcon />
      </ButtonStyled>
      <Input
        as={Tag}
        debounceTimeout={500}
        ref={refInput}
        onChange={handleChange}
        onKeyUp={handlePress}
        {...filterProps(props, Tag)}
      />
      {!!max && <Count>{`${current} / ${max}`}</Count>}
      <Actions>
        {!!canClear && (
          <Action>
            <CloseButton onClick={onClear}>
              <CloseIcon width="24px" height="24px" />
            </CloseButton>
          </Action>
        )}
        {!!actions && (
          <Action additional divide={max || canClear}>
            {actions}
          </Action>
        )}
      </Actions>
    </Block>
  );
};

DefaultSearchComponent.propTypes = {
  componentClass: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  current: PropTypes.number,
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  canClear: PropTypes.bool,
  onClear: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  actions: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  block: PropTypes.bool,
};
DefaultSearchComponent.defaultProps = {
  componentClass: DebounceInput,
  current: 0,
  value: '',
  max: null,
  canClear: false,
  actions: null,
  onClear: null,
  onChange: null,
  block: false,
};

export default DefaultSearchComponent;
