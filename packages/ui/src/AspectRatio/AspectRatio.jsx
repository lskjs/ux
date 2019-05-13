import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Inner } from './AspectRatio.styles';

const AspectRatio = ({ ratio, children, ...props }) => (
  <Wrapper ratio={ratio} {...props}>
    <Inner>
      {children}
    </Inner>
  </Wrapper>
);

AspectRatio.propTypes = {
  ratio: PropTypes.oneOf(['1:1', '4:3', '16:9', '21:9']),
  children: PropTypes.instanceOf(PropTypes.any).isRequired,
};

AspectRatio.defaultProps = {
  ratio: 'auto',
};

export default AspectRatio;
