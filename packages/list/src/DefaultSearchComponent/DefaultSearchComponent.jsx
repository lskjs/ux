import React, { PureComponent } from 'react';
import DebounceInput from 'react-debounce-input';
import PropTypes from 'prop-types';
import If from 'react-if';
import CloseIcon from 'react-icons2/mdi/close';
import Magnify from 'react-icons2/mdi/magnify';
import autobind from '@lskjs/autobind';
import Button from '@lskjs/button';
import filterProps from '@lskjs/utils/filterProps';

import {
  Block,
  Button as ButtonStyled,
  Count,
  Input,
  Actions,
  Action,
} from './DefaultSearchComponent.styles';

class DefaultSearchComponent extends PureComponent {
  static propTypes = {
    componentClass: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    current: PropTypes.number,
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    canClear: PropTypes.bool,
    onClear: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
    actions: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  }
  static defaultProps = {
    componentClass: DebounceInput,
    current: 0,
    value: '',
    max: null,
    canClear: false,
    actions: null,
    onClear: null,
    onChange: null,
  }
  @autobind
  handleChange(event) {
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

  @autobind
  handlePress(event) {
    if (event.keyCode === 13) {
      this.handleChange(event);
    }
  }

  @autobind
  handleClick() {
    if (this.input) {
      this.handleChange(this.input.state.value);
    }
  }

  render() {
    const {
      componentClass: Tag,
      current,
      max,
      actions,
      canClear,
      onClear,
      ...props
    } = this.props;
    return (
      <Block>
        <ButtonStyled
          type="button"
          onClick={this.handleClick}
        >
          <Magnify />
        </ButtonStyled>
        <Input
          componentClass={Tag}
          debounceTimeout={500}
          ref={(e) => { this.input = e; }}
          onChange={this.handleChange}
          onKeyUp={this.handlePress}
          {...filterProps(props, Tag)}
        />
        <If condition={!!max}>
          <Count>
            {`${current} / ${max}`}
          </Count>
        </If>
        <Actions>
          <If condition={!!canClear}>
            <Action>
              <Button
                icon={<CloseIcon width="24px" height="24px" />}
                paint="primary"
                view="text"
                onClick={onClear}
              />
            </Action>
          </If>
          <If condition={!!actions}>
            <Action additional divide={max || canClear}>
              {actions}
            </Action>
          </If>
        </Actions>
      </Block>
    );
  }
}

export default DefaultSearchComponent;
