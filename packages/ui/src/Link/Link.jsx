import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autobind from '@lskjs/autobind';
import isAbsoluteUrl from '@lskjs/utils/isAbsoluteUrl';
import isMiddleClickEvent from '@lskjs/utils/isMiddleClickEvent';
import isModifiedEvent from '@lskjs/utils/isModifiedEvent';
import isLeftClickEvent from '@lskjs/utils/isLeftClickEvent';
import composeUrl from '@lskjs/utils/composeUrl';

class Link extends PureComponent {
  static defaultProps = {
    children: null,
    onClick: null,
    href: null,
  };
  static propTypes = {
    href: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
  };

  static contextTypes = {
    linkProvider: PropTypes.object,
    history: PropTypes.object,
  };

  @autobind
  handleClick(e) {
    const { onClick, target, to, href, qs } = this.props;
    const { linkProvider, history } = this.context;
    if (isMiddleClickEvent(e)) {
      return;
    }

    if (onClick) onClick(e);
    if (e.defaultPrevented === true) return;
    if (isModifiedEvent(e) || !isLeftClickEvent(e)) return;
    const url = composeUrl({ url: to || href, qs });
    if (url == null) return;
    if (target === '_blank' || isAbsoluteUrl(url)) return;
    e.preventDefault();

    if (history) {
      history.push(url);
    } else if (linkProvider) {
      linkProvider.onClick(url, e);
    } else if (typeof window !== 'undefined' && window.app && window.app.uapp && window.app.uapp.history) {
      if (__DEV__) console.debug('Link without linkProvider: using global.app.uapp.history'); // eslint-disable-line no-console
      window.app.uapp.history.redirect(url);
    } else {
      console.error('Link without linkProvider (history)'); // eslint-disable-line no-console
      window.location = url;
    }
  }

  render() {
    const { to, href, qs, children, ...props } = this.props;
    const url = composeUrl({ url: to || href, qs });
    return (
      <a href={url} {...props} onClick={this.handleClick}>
        {children}
      </a>
    );
  }
}

export default Link;
