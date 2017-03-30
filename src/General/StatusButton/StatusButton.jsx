import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import cx from 'classnames';
import css from 'importcss';

import Check from 'react-icons/lib/fa/check';
import Refresh from 'react-icons/lib/fa/refresh';
import Close from 'react-icons/lib/fa/close';

const BUTTON_STATUS = {
  none: '',
  loading: 'loading',
  success: 'success',
  error: 'error',
};

@css(require('./StatusButton.css'))
class StatusButton extends Component {
  static defaultProps = {
    status: BUTTON_STATUS.none,
    children: 'Отправить',
    promise: null,
    timeout: 2000,
    tag: Button,
  };
  static propTypes = {
    status: React.PropTypes.string,
    children: PropTypes.any,
    promise: PropTypes.any,
    timeout: PropTypes.number,
    tag: PropTypes.any,
  };
  constructor(props) {
    super(props);
    this.state = {
      status: props.promise ? BUTTON_STATUS.loading : props.status,
    };
    this.resolvePromise(props.promise);
  }
  componentWillReceiveProps(nextProps) {
    this.resolvePromise(nextProps.promise);
    if (!nextProps.promise) {
      this.setState({ status: nextProps.status });
    }
  }
  resolvePromise(promise) {
    const { status } = this.state;
    if (!promise) return;
    if (status !== BUTTON_STATUS.loading) {
      this.setState({ status: BUTTON_STATUS.loading });
    }
    promise
      .then(() => this.finishStatus(BUTTON_STATUS.success))
      .catch(() => this.finishStatus(BUTTON_STATUS.error));
  }
  finishStatus(status) {
    this.setState({ status });
    setTimeout(() => this.setState({ status: '' }), this.props.timeout);
  }
  convertStatus(status) {
    switch (status) {
      case 'loading':
        return <Refresh />;
      case 'success':
        return <Check />;
      case 'error':
        return <Close />;
      default:
        return '';
    }
  }
  render() {
    const { status } = this.state;
    const { children, tag: Tag } = this.props;

    const bsStyle = cx({
      primary: status === BUTTON_STATUS.none,
      default: status === BUTTON_STATUS.loading,
      success: status === BUTTON_STATUS.success,
      danger: status === BUTTON_STATUS.error,
    });
    const disabled = ['loading', 'error', 'success'].includes(status);

    return (
      <Tag
        {...this.props}
        styleName={`StatusButton ${bsStyle} ${this.props.styleName}`}
        bsStyle={disabled ? bsStyle : this.props.bsStyle}
        disabled={disabled}
      >
        <span style={{ visibility: disabled ? 'hidden' : 'visible' }}>
          {children}
        </span>
        <div
          styleName={cx({
            animate: true,
            spin: status === BUTTON_STATUS.loading,
          })}
        >
          {this.convertStatus(status)}
        </div>
      </Tag>
    );
  }
}

export default StatusButton;
