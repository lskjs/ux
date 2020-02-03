import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Title from './ModalTitle';


const transitionLayout = css`

  > .stateful-modal-inner > *:last-child {
    padding-bottom: 24px;
    border-radius: 0 0 8px 8px;
  }

  > .stateful-modal-inner > .modal-help:first-child {
    padding-top: 24px;
    padding-bottom: 32px;
  }

  > .stateful-modal-inner > .modal-help:last-child {
    padding-bottom: 24px;
    padding-top: 12px;
  }

  > .stateful-modal-inner > *:first-child:not(.modal-title) {
    padding-top: 24px;
    margin-top: 0;
  }

  > .stateful-modal-inner > .modal-title:first-child {
    border-radius: 0 !important;
  }

  > .stateful-modal-inner > .modal-title:first-child + * {
    padding-top: 24px;
  }


  > .stateful-modal-inner .modal-help .buzz-modal-content {
    padding-top: 8px;
  }
`;

class Layout extends PureComponent {
  static propTypes = {
    children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    onBack: PropTypes.func,
    pathname: PropTypes.string,
    title: PropTypes.string,
    align: PropTypes.oneOf(['left', 'center', 'right']),
  }
  static defaultProps = {
    align: 'left',
    onBack: null,
    title: null,
    pathname: null,
    children: null,
  }
  render() {
    const { pathname, children, title, align, onBack } = this.props;
    return (
      <div className={transitionLayout}>
        <Title onBack={onBack} align={align}>{title}</Title>
        <div key={pathname}>
          {children}
        </div>
      </div>
    );
  }
}

export default Layout;
