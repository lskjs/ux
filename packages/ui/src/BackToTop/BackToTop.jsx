import React from 'react';
import PropTypes from 'prop-types';
import ArrowUp from 'react-icons2/mdi/arrow-up';
import scrollTo from '@lskjs/scroll';
import Fab from '../Fab';
import VisibilityScroll from '../VisibilityScroll';

const BackToTop = ({ paint, position, fixed, ...props }) => (
  <VisibilityScroll trigger={1}>
    <Fab paint={paint} position={position} fixed={fixed} onClick={() => scrollTo(0)} {...props}>
      <ArrowUp />
    </Fab>
  </VisibilityScroll>
);

BackToTop.propTypes = {
  /** Другой цвет состояния */
  paint: PropTypes.string,
  /** Позиционирование */
  position: PropTypes.string,
  /** фиксированное положение */
  fixed: PropTypes.bool,
};

BackToTop.defaultProps = {
  paint: 'primary',
  position: 'bottom right',
  fixed: true,
};

export default BackToTop;
