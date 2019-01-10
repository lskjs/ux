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
  }

  static defaultProps = {
    trigger: null,
    width: null,
    children: null,
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

  @autobind
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
    const { width, trigger } = this.props;
    return (
      <Overlay
        rootClose
        trigger="click"
        placement="bottom"
        overlay={this.renderContent()}
        innerRef={this.overlay}
        delay={0}
        onClick={() => this.openHandler(true)}
        onExit={() => this.openHandler(false)}
        width={width}
      >
        <Trigger
          width={width}
          open={open}
        >
          {trigger}
          <Triangle />
        </Trigger>
      </Overlay>
    );
  }
}

export default SelectFilter;
