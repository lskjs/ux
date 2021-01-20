import React, { forwardRef } from 'react';
import createChainedFunction from './utils/createChainedFunction';

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}

const SafeAnchor = React.forwardRef(
  (
    {
      as: Component = 'a',
      htmlAs = 'a',
      disabled,
      onKeyDown,
      ...props
    },
    ref,
  ) => {
    const handleClick = (event) => {
      const { href, onClick } = props;

      if (disabled || isTrivialHref(href)) {
        event.preventDefault();
      }

      if (disabled) {
        event.stopPropagation();
        return;
      }

      if (onClick) {
        onClick(event);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === ' ') {
        event.preventDefault();
        handleClick(event);
      }
    };

    if (isTrivialHref(props.href)) {
      props.role = props.role || 'button';
      props.href = props.href || '#';
    }

    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    return (
      <Component
        as={htmlAs}
        ref={ref}
        {...props}
        onClick={handleClick}
        onKeyDown={createChainedFunction(handleKeyDown, onKeyDown)}
      />
    );
  },
);

export default SafeAnchor;
