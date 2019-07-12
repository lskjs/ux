import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ArrowUp from 'react-icons2/mdi/arrow-up';
import scrollTo from '@lskjs/scroll';
import Fab from '../Fab';
import VisibilityScroll from '../VisibilityScroll';

class BackToTop extends PureComponent {
  static propTypes = {
    /** Другой цвет состояния */
    paint: PropTypes.string,
    /** Позиционирование */
    position: PropTypes.string,
    /** фиксированное положение */
    fixed: PropTypes.bool,
  }

  static defaultProps = {
    paint: 'primary',
    position: 'bottom right',
    fixed: true,
  }

  scrollToTop() {
    scrollTo(0);
  }

  render() {
    const { paint, position, fixed, ...props } = this.props;
    return (
      <VisibilityScroll trigger={1}>
        <Fab
          paint={paint}
          position={position}
          fixed={fixed}
          onClick={this.scrollToTop}
          {...props}
        >
          <ArrowUp />
        </Fab>
      </VisibilityScroll>
    );
  }
}

export default BackToTop;
