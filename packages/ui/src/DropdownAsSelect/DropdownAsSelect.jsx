import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import autobind from '@lskjs/autobind';
import ChevronDownIcon from 'react-icons2/mdi/chevron-down';
import { Manager, Reference, Popper } from 'react-popper';

import Outside from '@lskjs/utils/react-click-outside';
import {
  contentStyle,
  outsideWrapperStyle,
  popperDisabledStyle,
  Content,
  Trigger as TriggerStyled,
  Icon,
  injectStyles,
} from './DropdownAsSelect.styles';

injectStyles();

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
    // eslint-disable-next-line react/forbid-prop-types
    contentWrapperProps: PropTypes.object,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    trigger: null,
    children: null,
    disabled: false,
    triggerClosable: true,
    outsideClosable: null,
    contentWrapperProps: {},
    onClose: null,
  }

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
      contentHeight: this.content.current
        ? this.content.current.scrollHeight
        : '100%',
    });
  }

  @autobind
  renderContent({ ref, style, placement }) {
    const { open, contentHeight } = this.state;
    const { children, contentWrapperProps } = this.props;
    if (!open) return false;
    const content = typeof children === 'function' ? children({ open }) : children;
    return (
      <Content
        innerRef={ref}
        data-placement={placement}
        height={contentHeight}
        className={contentStyle}
        style={style}
      >
        <div ref={this.content}>
          <div {...contentWrapperProps}>
            {content}
          </div>
        </div>
      </Content>
    );
  }

  render() {
    const { open, defaultOutsideClosable } = this.state;
    const { trigger, disabled, triggerClosable, outsideClosable } = this.props;
    const { Trigger } = this.constructor;
    const isOutside = outsideClosable !== null ? outsideClosable : defaultOutsideClosable;
    return (
      <Outside className={outsideWrapperStyle} onClickOutside={isOutside ? this.onClickOutside : () => {}}>
        <Manager>
          <Reference>
            {({ ref }) => (
              <Trigger
                innerRef={ref}
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
                    }
                  }
                }}
                type="button"
              >
                {typeof trigger === 'function' ? trigger({ open }) : trigger}
                <Icon>
                  <ChevronDownIcon />
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
