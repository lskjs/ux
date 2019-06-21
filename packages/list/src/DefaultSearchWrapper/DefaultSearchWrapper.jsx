import React, { PureComponent } from 'react';
import DebounceInput from 'react-debounce-input';
import PropTypes from 'prop-types';
import get from 'lodash/get';
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
} from './DefaultSearchWrapper.styles';

class Search extends PureComponent {
  static propTypes = {
    componentClass: PropTypes.any,
    current: PropTypes.number,
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    canClear: PropTypes.bool,
    onClear: PropTypes.func,
    actions: PropTypes.any,
  }
  static defaultProps = {
    componentClass: DebounceInput,
    current: 0,
    max: null,
    canClear: false,
    actions: null,
    onClear: null,
  }
  @autobind
  handleChange(event) {
    const { onChange } = this.props;
    let value = '';
    if (typeof event === 'string') {
      value = event;
    } else if (get(event, 'target.value')) {
      ({ value } = event.target);
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
          <If condition={canClear}>
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

export default Search;
