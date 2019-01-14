import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'core-decorators/lib/autobind';
import { Overlay, Content, Trigger, Triangle } from './DropdownAsSelect.styles';

class SelectFilter extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    trigger: PropTypes.any,
    children: PropTypes.any,
    width: PropTypes.number,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    trigger: null,
    width: null,
    children: null,
    disabled: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.overlay = React.createRef();
  }

  @autobind
  openHandler(open) {
    this.setState({ open });
    this.overlay.current.setState({ show: open });
  }

  renderContent() {
    const { width, id, children } = this.props;
    return (
      <Content id={id} width={width}>
        {children}
      </Content>
    );
  }

  render() {
    const { open } = this.state;
    const { width, trigger, disabled } = this.props;
    return (
      <Overlay
        rootClose
        trigger="click"
        placement="bottom"
        overlay={this.renderContent()}
        innerRef={this.overlay}
        delay={0}
        onClick={() => !disabled && this.openHandler(true)}
        onExit={() => !disabled && this.openHandler(false)}
        width={width}
      >
        <Trigger
          width={width}
          open={!disabled ? open : false}
          disabled={disabled}
          type="button"
        >
          {trigger}
          <Triangle />
        </Trigger>
      </Overlay>
    );
  }
}

export default SelectFilter;
