import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { autobind } from 'core-decorators'
import importcss from 'importcss'

export default class MyModal extends Component {

  constructor(props) {
    super(props)
    this.state = { visible: false }
  }
  getChildContext() {
    return {
      _modal: ({ type, id }) => {
        if (type === 'open') {
          this.setState({ visible: true })
        }
        if (type === 'close') {
          this.setState({ visible: false })
        }
        return this.state
      }
    }
  }
  render() {
    // return this.props.children
    let className = ''
    if (this.props.fullscreen) {
      className = 'modal-fullscreen'
    }
    return <div className={className}>
      {this.props.children}
    </div>
  }
}
MyModal.childContextTypes = {
  _modal: React.PropTypes.func,
}

export class ModalButton extends Component {
  @autobind
  handle() {
    this.context._modal({ type: this.props.type || 'open', id: this.props.id || 'single' });
  }
  render() {
    return <span onClick={this.handle}>
      {this.props.children || ''}
    </span>
  }
}
ModalButton.contextTypes = {
  _modal: React.PropTypes.func,
}
MyModal.Button = ModalButton
MyModal.Trigger = ModalButton

// @importcss(require('./ModalContent.css'))
export class ModalContent extends Component {
  @autobind
  handle() {
    this.context._modal({ type: 'close', id: this.props.id || 'single' });
  }
  render() {
    const state = this.context._modal({ type: 'state', id: this.props.id || 'single' });

    let className = ''
    if (this.props.fullscreen) {
      className = 'modal-fullscreen'
    }
    return <Modal
      show={state.visible}
      onHide={this.handle}

      dialogClassName={className}
      // bsClass="modal-fullscreen"
    >
      <If condition={this.props.title}>
        <Modal.Header closeButton>
          {this.props.title}
        </Modal.Header>
        <Modal.Body>
          {this.props.children || ''}
        </Modal.Body>
      </If>
      <If condition={!this.props.title}>
        {this.props.children || ''}
      </If>
      {/*<Modal.Footer>
        <Button onClick={this.close.bind(this)}>Закрыть</Button>
      </Modal.Footer>*/}
    </Modal>
  }
}
ModalContent.contextTypes = {
  _modal: React.PropTypes.func,
}
MyModal.Content = ModalContent
MyModal.Header = Modal.Header
MyModal.Body = Modal.Body
MyModal.Footer = Modal.Footer
MyModal.Title = Modal.Title
