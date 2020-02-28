import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import cx from 'classnames';
import autobind from '@lskjs/autobind';
import ChevronDownIcon from 'react-icons2/mdi/chevron-down';
import { Manager, Reference, Popper } from 'react-popper';

import Outside from '../utils/react-click-outside';
import {
  contentStyle,
  outsideWrapperStyle,
  popperDisabledStyle,
  Content,
  Trigger as TriggerStyled,
  Icon,
  globalStyles,
} from './DropdownAsSelect.styles';

class SelectFilter extends PureComponent {
  static Trigger = TriggerStyled;
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    trigger: PropTypes.any,
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.any,
    disabled: PropTypes.bool,
    triggerClosable: PropTypes.bool,
    outsideClosable: PropTypes.bool,
    triggerIconClosable: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    contentWrapperProps: PropTypes.object,
    onClose: PropTypes.func,
    icon: PropTypes.any,
  };

  static defaultProps = {
    trigger: null,
    children: null,
    disabled: false,
    triggerClosable: true,
    outsideClosable: null,
    triggerIconClosable: true,
    contentWrapperProps: {},
    onClose: null,
    icon: <ChevronDownIcon />,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      contentHeight: '100%',
      defaultOutsideClosable: true,
    };
    this.content = React.createRef();
  }

  @autobind
  onClickOutside() {
    const { open } = this.state;
    const { onClose } = this.props;
    if (!open) return;
    this.openHandler(false);
    if (onClose) {
      onClose();
    }
  }

  @autobind
  openHandler(open) {
    this.setState({ open }, this.updateHeight);
  }

  @autobind
  updateHeight() {
    this.setState({
      contentHeight: this.content.current ? this.content.current.scrollHeight : '100%',
    });
  }

  @autobind
  renderContent({ ref, style, placement }) {
    const { open, contentHeight } = this.state;
    const { children, contentWrapperProps } = this.props;
    if (!open) return false;
    const content = typeof children === 'function' ? children({ open }) : children;
    return (
      <Content ref={ref} data-placement={placement} height={contentHeight} className={contentStyle} style={style}>
        <div ref={this.content}>
          <div {...contentWrapperProps}>{content}</div>
        </div>
      </Content>
    );
  }

  render() {
    const { open, defaultOutsideClosable } = this.state;
    const { trigger, disabled, triggerClosable, outsideClosable, triggerIconClosable, onClose, icon } = this.props;
    const { Trigger } = this.constructor;
    const isOutside = outsideClosable !== null ? outsideClosable : defaultOutsideClosable;
    return (
      <Outside className={outsideWrapperStyle} onClickOutside={isOutside ? this.onClickOutside : () => {}}>
        <Global styles={globalStyles} />
        <Manager>
          <Reference>
            {({ ref }) => (
              <Trigger
                ref={ref}
                open={!disabled ? open : false}
                disabled={disabled}
                onClick={() => {
                  // if (isOutside) {
                  //   this.setState({ defaultOutsideClosable: false });
                  // }
                  if (!disabled && !open) {
                    this.openHandler(true);
                  }
                  if (open && triggerClosable) {
                    if (!disabled) {
                      this.openHandler(false);
                      if (onClose) {
                        onClose();
                      }
                    }
                  }
                }}
                type="button"
              >
                {typeof trigger === 'function' ? trigger({ open }) : trigger}
                <Icon
                  type="button"
                  onClick={() => {
                    if (open && triggerIconClosable) {
                      if (!disabled) {
                        this.openHandler(false);
                        if (onClose) {
                          onClose();
                        }
                      }
                    }
                  }}
                >
                  {icon}
                </Icon>
              </Trigger>
            )}
          </Reference>
          <Popper
            placement="bottom"
            eventsEnabled={open}
            modifiers={{
              flip: {
                enabled: false,
              },
              keepTogether: {
                enabled: false,
              },
              preventOverflow: {
                enabled: false,
              },
              shift: {
                enabled: false,
              },
            }}
            className={cx({
              [popperDisabledStyle]: !open,
            })}
          >
            {this.renderContent}
          </Popper>
        </Manager>
      </Outside>
    );
  }
}

export default SelectFilter;
