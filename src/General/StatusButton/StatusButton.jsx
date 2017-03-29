import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import cx from 'classnames';
import css from 'importcss';

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
  };
  static propTypes = {
    status: React.PropTypes.string,
    children: PropTypes.any,
    promise: PropTypes.any,
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
    if (!promise) return;
    if (this.state.status !== BUTTON_STATUS.loading) {
      this.setState({ status: BUTTON_STATUS.loading });
    }
    promise
      .then(() => this.setState({ status: BUTTON_STATUS.success }))
      .catch(() => this.setState({ status: BUTTON_STATUS.error }));
  }
  render() {
    const status = this.state.status;

    const {
      children,
    } = this.props;

    const style = cx({
      primary: status === BUTTON_STATUS.none,
      default: status === BUTTON_STATUS.loading,
      success: status === BUTTON_STATUS.success,
      danger: status === BUTTON_STATUS.error,
    });

    const classnames = cx({
      StatusButton: true,
      default: status === BUTTON_STATUS.none,
      loading: status === BUTTON_STATUS.loading,
      success: status === BUTTON_STATUS.success,
      error: status === BUTTON_STATUS.error,
    });

    const ButtonContent = this.state.status || '';

    return (
      <Button styleName={classnames} bsStyle={style} {...this.props}>
        <span style={{ visibility: this.state.status ? 'hidden' : 'visible' }}>
          {children}
        </span>
        <div styleName="animate">{ButtonContent}</div>
      </Button>
    );
  }
}

export default StatusButton;
