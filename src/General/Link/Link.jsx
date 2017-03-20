
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends Component {
  static defaultProps = {
    children: null,
    onClick: null,
    to: null,
    href: null,
  }
  static propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (event.defaultPrevented === true) {
      return;
    }
    
    const url = this.props.to || this.props.href;
    if(this.props.target === '_blank' || isAbsoluteUrl(url)){
      return;
    }    

    event.preventDefault();
    this.context.history.push(url);
  };

  render() {
    const { to, href, children, ...props } = this.props;
    return <a href={to || href} {...props} onClick={this.handleClick}>{children}</a>;
  }

}

export default Link;

function isAbsoluteUrl(url){
  return url.indexOf('://') > 0 || url.indexOf('//') === 0 
}
