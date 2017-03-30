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
    bsStyle: 'primary',
    styleName: '',
  };
  static propTypes = {
    status: React.PropTypes.string,
    children: PropTypes.any,
    promise: PropTypes.any,
    bsStyle: PropTypes.string,
    styleName: PropTypes.string,
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
    setTimeout(() => this.setState({ status: '' }), 2000);
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
    const { children, bsStyle, styleName } = this.props;

    const style = cx({
      default: status === BUTTON_STATUS.loading,
      success: status === BUTTON_STATUS.success,
      danger: status === BUTTON_STATUS.error,
    });

    return (
      <Button
        {...this.props}
        styleName={`StatusButton ${style} ${styleName}`}
        bsStyle={status === BUTTON_STATUS.none ? bsStyle : style}
        disabled={['loading', 'error', 'success'].includes(status)}
      >
        <span style={{ visibility: status ? 'hidden' : 'visible' }}>
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
      </Button>
    );
  }
}

export default StatusButton;
