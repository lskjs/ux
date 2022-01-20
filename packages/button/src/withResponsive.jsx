/* eslint-disable react/display-name */
import cx from 'classnames';
import React from 'react';

const withResponsive =
  (Button) =>
  ({ icon, className, children, ...props }) =>
    (
      <>
        <Button {...props} iconLeft={icon} className={cx(className, 'd-none d-md-flex')}>
          {children}
        </Button>
        <Button {...props} icon={icon} className={cx(className, 'd-md-none')} />
      </>
    );

export default withResponsive;
