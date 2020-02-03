import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactDOM from 'react-dom';
import If from 'react-if';
import Performance from '@lskjs/dev/Performance';
import autobind from '@lskjs/autobind';
import Button from '@lskjs/button';

import Wrapper, { listStyle, Actions } from './DropdownList.styles';
import Paper from '../Paper';

class DropdownList extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    rect: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    items: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    pull: PropTypes.oneOf(['start', 'end', 'stretch']),
    placement: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
    bordered: PropTypes.bool,
    actions: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  }
  static defaultProps = {
    id: null,
    rect: null,
    items: null,
    pull: 'start',
    placement: 'bottom',
    bordered: null,
    actions: null,
  }
  constructor(props) {
    super(props);
    this.menu = React.createRef();
    this.state = {
      menuRect: 0,
    };
  }
  @autobind
  componentDidMount() {
    const { current: menu } = this.menu;
    this.setState({
      menuRect: menu && menu.getBoundingClientRect(),
    });
  }
  @autobind
  getListComponent() {
    const { rect, items, pull, placement, bordered, actions } = this.props;
    const { menuRect } = this.state;
    const styleProps = {
      left: 0,
      right: 0,
    };
    // if (pull === 'start') {
    //   if (placement === 'top') {
    //     styleProps.top = `${rect.top - menuRect.height}px`;
    //     styleProps.left = `${rect.left}px`;
    //   } else if (placement === 'bottom') {
    //     styleProps.top = `${rect.top + rect.height}px`;
    //     styleProps.left = `${rect.left}px`;
    //   } else if (placement === 'right') {
    //     styleProps.top = `${rect.top}px`;
    //     styleProps.left = `${rect.left + rect.height}px`;
    //   } else if (placement === 'left') {
    //     styleProps.top = `${rect.top}px`;
    //     styleProps.left = `${rect.left - menuRect.width}px`;
    //   }
    // } else if (pull === 'end') {
    //   if (placement === 'top') {
    //     styleProps.top = `${rect.top - menuRect.height}px`;
    //     styleProps.left = `${rect.left + rect.width - menuRect.width}px`;
    //   } else if (placement === 'bottom') {
    //     styleProps.top = `${rect.top + rect.height}px`;
    //     styleProps.left = `${rect.left + rect.width - menuRect.width}px`;
    //   } else if (placement === 'right') {
    //     styleProps.top = `${rect.bottom - menuRect.height}px`;
    //     styleProps.left = `${rect.left + rect.height}px`;
    //   } else if (placement === 'left') {
    //     styleProps.top = `${rect.top - menuRect.height + rect.height}px`;
    //     styleProps.left = `${rect.left - menuRect.width}px`;
    //   }
    // }
    if (pull === 'start') {
      if (placement === 'top') {
        styleProps.top = `${0 - menuRect.height}px`;
      } else if (placement === 'bottom') {
        styleProps.top = `${rect.height}px`;
      } else if (placement === 'right') {
        styleProps.left = `${rect.width}px`;
      } else if (placement === 'left') {
        styleProps.left = `${0 - menuRect.width}px`;
      }
    } else if (pull === 'end') {
      if (placement === 'top') {
        styleProps.top = `${0 - menuRect.height}px`;
        styleProps.left = `${rect.width - menuRect.width}px`;
      } else if (placement === 'bottom') {
        styleProps.top = `${rect.height}px`;
        styleProps.left = `${rect.width - menuRect.width}px`;
      } else if (placement === 'right') {
        styleProps.top = `${rect.height - menuRect.height}px`;
        styleProps.left = `${rect.width}px`;
      } else if (placement === 'left') {
        styleProps.top = `${rect.height - menuRect.height}px`;
        styleProps.left = `${0 - menuRect.width}px`;
      }
    } else if (pull === 'stretch') {
      styleProps.top = `${rect.height}px`;
      styleProps.width = `${rect.width}px`;
    }
    return (
      <Performance name="DropdownList" disabled={!__DEV__}>
        <Wrapper
          rect={rect}
          ref={this.menu}
          menuRect={menuRect}
          style={styleProps}
          pull={pull}
          bordered={!!bordered}
        >
          <If condition={!!actions}>
            <Actions>
              {actions}
            </Actions>
          </If>
          <Paper shadow className={listStyle}>
            {items}
          </Paper>
        </Wrapper>
      </Performance>
    );
  }
  render() {
    if (typeof window === 'undefined') return false;
    const { id } = this.props;
    return ReactDOM.createPortal(this.getListComponent(), document.querySelector(`#${id}`));
  }
}

export default DropdownList;
