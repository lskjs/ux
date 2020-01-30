/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Breadcrumbs.styles';

const Breadcrumbs = ({ render, items = [], ...props }) => (
  <Wrapper {...props}>
    {items.map((item, i) => (
      <span key={item.id || item.key || i}>
        {(render ? render(item, i) : item.title) || (__DEV__ ? '??' : '')}
        {(i !== items.length - 1) && (
          <span>
            &nbsp;/&nbsp;
          </span>
        )}
      </span>
    ))}
  </Wrapper>
);

Breadcrumbs.defaultProps = {
  items: [],
  render: item => item && item.title,
};
Breadcrumbs.propTypes = {
  render: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.string,
  })),
};

export default Breadcrumbs;
