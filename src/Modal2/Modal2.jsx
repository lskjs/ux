import React, { PureComponent } from 'react';
import If from 'react-if';
import cx from 'classnames';
import pick from 'lodash/pick';
import omit from 'lodash/omit';
import merge from 'lodash/merge';
import autobind from 'core-decorators/lib/autobind';
import ReactModal from 'react-modal';
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
import sizes from '../utils/sizes';

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
    this.body = React.createRef();
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
  close() {
    this.setState({ visible: false });
    if (this.props.onClose) this.props.onClose();
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
      disabled,
      trigger,
      innerRef,
      style,
      ...props
    } = this.props;
    const modal = this;
    if (innerRef) innerRef(this);
    return (
      <Provider value={{ modal, Modal }}>
        <React.Fragment>
          <ReactModal
            ref={(e) => { this._modal = e; }}
            contentRef={(e) => {
              if (__CLIENT__ && e) {
                e.onclick = (event) => {
                  if (!event.path.includes(this.body.current)) {
                    this._modal.portal.shouldClose = true;
                    this._modal.portal.handleOverlayOnClick(event);
                  }
                };
              }
            }}
            isOpen={this.state.visible}
            onRequestClose={this.close}
            bodyOpenClassName={bodyModalStyle}
            htmlOpenClassName={bodyModalStyle}
            style={merge(style, Modal2.defaultStyles)}
            {...pick(props, reactModalProps)}
          >
            <div
              aria-hidden
              ref={this.body}
              className={cx({
                [className]: className,
                [modalStyle]: true,
                [modalSmall]: sizes.is(size, 'small'),
                [modalNormal]: sizes.is(size, 'medium'),
                [modalLarge]: sizes.is(size, 'large'),
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
            </div>
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
