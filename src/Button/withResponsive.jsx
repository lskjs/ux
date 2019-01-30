import React from 'react';
import cx from 'classnames';

const withResponsive = Button => ({ className, children, ...props }) => (
  <React.Fragment>
    <Button
      {...props}
      className={cx(className, 'd-none d-sm-flex')}
    >
      {children}
    </Button>
    <Button
      {...props}
      className={cx(className, 'd-sm-none')}
    />
  </React.Fragment>
);

export default withResponsive;
