import React, { PureComponent } from 'react';
import If from 'react-if';
import cx from 'classnames';
import pick from 'lodash/pick';
import omit from 'lodash/omit';
import merge from 'lodash/merge';
import ReactModal from 'react-modal';
import isTouchDevice from '../utils/isTouchDevice';
import autobind from 'core-decorators/lib/autobind';
import ModalSubtitle from '../UI/atoms/ModalSubtitle';
import ModalDescription from '../UI/atoms/ModalDescription';
import ModalContent from '../UI/atoms/ModalContent';
import ModalFooter from '../UI/atoms/ModalFooter';
import ModalImage from '../UI/atoms/ModalImage';
import ModalHelp from '../UI/atoms/ModalHelp';
import ModalScroll from '../UI/organisms/ModalScroll';
import ModalTitle from '../UI/molecules/ModalTitle';
import ModalTrigger from './ModalTrigger';
import ModalInner from './ModalInner';
import ModalCloseIcon from './ModalCloseIcon';
import Outside from '../utils/react-click-outside';

import {
  bodyModalStyle,
  modalStyle,
  modalSmall,
  modalNormal,
  modalLarge,
  InnerWrapper,
} from './Modal2.styles';

import { Provider } from './Modal2.context';

const reactModalProps = ['isOpen', 'onAfterOpen', 'onRequestClose', 'closeTimeoutMS', 'style', 'contentLabel', 'portalClassName', 'overlayClassName', 'className', 'bodyOpenClassName', 'htmlOpenClassName', 'ariaHideApp', 'shouldFocusAfterRender', 'shouldCloseOnOverlayClick', 'shouldCloseOnEsc', 'shouldReturnFocusAfterClose', 'role', 'parentSelector', 'aria', 'data', 'overlayRef', 'contentRef'];

ReactModal.defaultStyles = {
  overlay: {
    ...ReactModal.defaultStyles.overlay,
    backgroundColor: 'rgba(0,0,0,.3)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 2030,
  },
  content: {
    ...ReactModal.defaultStyles.content,
    background: 'none',
    border: 'none',
    padding: '20px 15px',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};

if (typeof (window) !== 'undefined') {
  ReactModal.setAppElement('body');
}

class Modal2 extends PureComponent {
  static Title = ModalTitle;
  static Subtitle = ModalSubtitle;
  static Image = ModalImage;
  static Content = ModalContent;
  static Description = ModalDescription;
  static Help = ModalHelp;
  static Scroll = ModalScroll;
  static Footer = ModalFooter;
  static Trigger = ModalTrigger;
  static InnerWrapper = InnerWrapper;
  static CloseIcon = ModalCloseIcon;
  static Inner = ModalInner;
  static defaultStyles = ReactModal.defaultStyles;

  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state = { visible: props.defaultVisible };
  }

  static getDerivedStateFromProps(props) {
    if (typeof props.visible === 'undefined') return null;
    return {
      visible: props.visible,
    };
  }

  @autobind
  toggle() {
    if (this.state.visible) {
      this.close();
    } else {
      this.open();
    }
  }

  @autobind
  open() {
    this.setState({ visible: true });
    if (this.props.onOpen) this.props.onOpen();
  }
  @autobind
  close(event) {
    if (__CLIENT__) {
      const isModalSelector = event.target.classList[0] === 'ReactModal__Content';
      if (!isModalSelector) return;
      this.setState({ visible: false });
      if (this.props.onClose) this.props.onClose();
    }
  }

  render() {
    const Modal = {
      Title: this.constructor.Title || this.props.Title,
      Subtitle: this.constructor.Subtitle || this.props.Subtitle,
      Image: this.constructor.Image || this.props.Image,
      Content: this.constructor.Content || this.props.Content,
      Description: this.constructor.Description || this.props.Description,
      Help: this.constructor.Help || this.props.Help,
      Scroll: this.constructor.Scroll || this.props.Scroll,
      Footer: this.constructor.Footer || this.props.Footer,
      Trigger: this.constructor.Trigger || this.props.Trigger,
      Inner: this.constructor.Inner || this.props.Inner,
      InnerWrapper: this.constructor.InnerWrapper || this.props.InnerWrapper,
      CloseIcon: this.constructor.CloseIcon || this.props.CloseIcon,
    };
    const {
      className,
      size = 'default',
      closable = true,
      trigger,
      innerRef,
      style,
      closeOnBackdrop = !isTouchDevice(),
      ...props
    } = this.props;
    const modal = this;
    if (innerRef) innerRef(this);

    return (
      <Provider value={{ modal, Modal }}>
        <React.Fragment>
          <ReactModal
            isOpen={this.state.visible}
            onRequestClose={this.close}
            bodyOpenClassName={bodyModalStyle}
            htmlOpenClassName={bodyModalStyle}
            style={merge(style, Modal2.defaultStyles)}
            {...pick(props, reactModalProps)}
          >
            <Outside
              onClickOutside={closeOnBackdrop ? this.close : null}
              className={cx({
                [className]: className,
                [modalStyle]: true,
                [modalSmall]: size === 'small',
                [modalNormal]: size === 'default',
                [modalLarge]: size === 'large',
              })}
            >
              <If condition={closable}>
                <Modal.CloseIcon onClick={this.close} />
              </If>
              <Modal.InnerWrapper>
                <Modal.Inner
                  {...omit(props, reactModalProps)}
                />
              </Modal.InnerWrapper>
            </Outside>
          </ReactModal>
          <If condition={trigger}>
            <Modal.Trigger type="open">{trigger}</Modal.Trigger>
          </If>
        </React.Fragment>
      </Provider>
    );
  }
}


export default Modal2;
