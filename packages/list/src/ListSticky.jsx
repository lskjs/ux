import Sticky from '@lskjs/ui/Sticky';
import filterProps from '@lskjs/utils/filterProps';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React from 'react';

const ListSticky = ({ children, offset, ...props }) => (
  <Sticky offset={offset} {...filterProps(props)}>
    {children}
  </Sticky>
);

ListSticky.propTypes = {
  children: PropTypes.node,
  offset: PropTypes.number,
};

ListSticky.defaultProps = {
  children: null,
  offset: 0,
};

export default inject('listStore')(observer(ListSticky));
