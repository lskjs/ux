import React, { PureComponent } from 'react';
import isFunction from 'lodash/isFunction';
import { contextToProps } from './Modal2.context';

@contextToProps('Modal', 'modal')
class ModalInner extends PureComponent { // eslint-disable-line
  render() {
    const {
      title, Modal, modal, body, image, footer, children, ...props
    } = this.props;

    if (children) {
      if (isFunction(children)) {
        return children({ modal });
      }
      return children;
    }
    return (
      <React.Fragment>
        {title && <Modal.Title>{title}</Modal.Title>}
        {image && <Modal.Image>{image}</Modal.Image>}
        {body && <Modal.Body>{body}</Modal.Body>}
        {footer && <Modal.Footer>{footer}</Modal.Footer>}
      </React.Fragment>
    );
  }
}

export default ModalInner;
