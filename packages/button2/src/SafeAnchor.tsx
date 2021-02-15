import { ReactComponentLike } from 'prop-types';
import React, { ComponentPropsWithoutRef, forwardRef, KeyboardEvent, MouseEvent } from 'react';

import createChainedFunction from './utils/createChainedFunction';

function isTrivialHref(href: string | undefined): boolean {
  return !href || href.trim() === '#';
}

interface SafeAnchorProps extends ComponentPropsWithoutRef<'a'> {
  as: ReactComponentLike | string;
  htmlAs: ReactComponentLike | string;
  disabled?: boolean;
  [key: string]: any;
}

const SafeAnchor = forwardRef<any, SafeAnchorProps>(
  ({ as: Component = 'a', htmlAs = 'a', disabled, onKeyDown, ...props }, ref) => {
    const handleClick = (event: MouseEvent<HTMLAnchorElement> | KeyboardEvent<HTMLAnchorElement>) => {
      const { href, onClick } = props;

      if (disabled || isTrivialHref(href)) {
        event.preventDefault();
      }

      if (disabled) {
        event.stopPropagation();
        return;
      }

      if (onClick) {
        onClick(event as MouseEvent<HTMLAnchorElement>);
      }
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
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
