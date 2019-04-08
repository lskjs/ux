import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import { inject, observer } from 'mobx-react';
import filterProps from '@lskjs/utils/filterProps';
import StatefulButton from '../StatefulButton';

@inject('api', 'uapp')
@observer
class UrlButton extends Component {
  static propTypes = {
    onSuccess: PropTypes.func,
    componentClass: PropTypes.any,
    url: PropTypes.string,
    api: PropTypes.object.isRequired,
    uapp: PropTypes.object.isRequired,
  };
  static defaultProps = {
    componentClass: 'button',
    onSuccess: null,
    url: null,
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onError = this.onError.bind(this);
  }

  async onClick() {
    const { api, url, onSuccess } = this.props;
    const res = await api.fetch(url);
    if (onSuccess) {
      await onSuccess(res);
    }
  }

  onError(err) {
    const { uapp } = this.props;
    uapp.onError(err);
  }

  render() {
    const { componentClass, ...props } = this.props;
    const buttonProps = omit(props, ['url', 'api', 'onSuccess']);
    return (
      <StatefulButton
        componentClass={componentClass}
        onClick={this.onClick}
        onError={this.onError}
        {...filterProps(buttonProps, componentClass)}
        // {...buttonProps}
      />
    );
  }
}

export default UrlButton;
