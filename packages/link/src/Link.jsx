import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import isAbsoluteUrl from '@lskjs/utils/isAbsoluteUrl';
import isMiddleClickEvent from '@lskjs/utils/isMiddleClickEvent';
import isModifiedEvent from '@lskjs/utils/isModifiedEvent';
import isLeftClickEvent from '@lskjs/utils/isLeftClickEvent';
import composeUrl from '@lskjs/utils/composeUrl';
import LinkContext from './Link.context';

const getUapp = () => {
  if (typeof window !== 'undefined') {
    return window.app && window.app.uapp;
  }
  return null;
};

const Link = ({ componentClass: Component = 'a', to, href, qs, target, children, onClick, ...props }) => {
  const ctx = useContext(LinkContext);
  const url = composeUrl({ url: to || href, qs });

  const handleClick = e => {
    if (onClick) onClick(e);
    if (isMiddleClickEvent(e)) return;
    if (e.defaultPrevented === true) return;
    if (isModifiedEvent(e) || !isLeftClickEvent(e)) return;
    if (url == null) return;
    if (target === '_blank' || isAbsoluteUrl(url)) return;
    e.preventDefault();

    if (ctx && ctx.onClick) {
      ctx.onClick(url, e);
    } else if (getUapp() && getUapp().redirect) {
      if (__DEV__) console.debug('Link without LinkProvider: using global.app.uapp.history'); // eslint-disable-line no-console
      getUapp().redirect(url);
    } else {
      console.error('Link without LinkProvider (history)'); // eslint-disable-line no-console
      window.location = url;
    }
  };

  return (
    <Component href={url} onClick={handleClick} {...props}>
      {children}
    </Component>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  target: PropTypes.string,
  to: PropTypes.string,
  qs: PropTypes.objectOf(Object),
};

Link.defaultProps = {
  children: null,
  onClick: null,
  target: null,
  href: null,
  to: null,
  qs: {},
};

export default Link;
