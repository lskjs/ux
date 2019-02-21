import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';
import SpinBall from '../../atoms/SpinBall';

import Wrapper from './BallSpin.styles';

class BallSpin extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
  };
  static defaultProps = {
    color: '#fff',
  };
  render() {
    const {
      color,
    } = this.props;
    return (
      <Wrapper>
        {range(8).map(i => <SpinBall key={i} color={color} />)}
      </Wrapper>
    );
  }
}
export default BallSpin;
