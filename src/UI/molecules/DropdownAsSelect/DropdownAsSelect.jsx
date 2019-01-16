import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import autobind from 'core-decorators/lib/autobind';
import { Manager, Reference, Popper } from 'react-popper';
import Outside from 'react-click-outside';
import { popperDisabledStyle, Content, Trigger, Triangle } from './DropdownAsSelect.styles';

class SelectFilter extends PureComponent {
  static propTypes = {
    trigger: PropTypes.any,
    children: PropTypes.any,
    disabled: PropTypes.bool,
    contentWrapperProps: PropTypes.object,
  }

  static defaultProps = {
    trigger: null,
    children: null,
    disabled: false,
    contentWrapperProps: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      contentHeight: '100%',
    };
    this.content = React.createRef();
  }

  @autobind
  openHandler(open) {
    this.setState({ open }, () => {
      this.setState({
        contentHeight: this.content.current?.scrollHeight || '100%',
      });
    });
  }

  @autobind
  renderContent({ ref, style, placement }) {
    const { open, contentHeight } = this.state;
    const { children, contentWrapperProps } = this.props;
    if (!open) return false;
    return (
      <Content
        innerRef={ref}
        data-placement={placement}
        height={contentHeight}
        style={style}
      >
        <div ref={this.content}>
          <div {...contentWrapperProps}>
            {children}
          </div>
        </div>
      </Content>
    );
  }

  render() {
    const { open } = this.state;
    const { trigger, disabled } = this.props;
    return (
      <Outside onClickOutside={() => this.openHandler(false)}>
        <Manager>
          <Reference>
            {({ ref }) => (
              <Trigger
                innerRef={ref}
                open={!disabled ? open : false}
                disabled={disabled}
                onClick={() => !disabled && this.openHandler(!open)}
                type="button"
              >
                {trigger}
                <Triangle />
              </Trigger>
            )}
          </Reference>
          <Popper
            placement="bottom"
            eventsEnabled={open}
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
