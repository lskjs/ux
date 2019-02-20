import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';
import MultiBall from '../../atoms/MultiBall';

import Wrapper from './BallScaleMulti.styles';

class BallScaleMulti extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
  };
  static defaultProps = {
    color: '#fff',
  }
  render() {
    const {
      color,
    } = this.props;
    return (
      <Wrapper>
        {range(4).map(i => <MultiBall key={i} color={color} />)}
      </Wrapper>
    );
  }
}
export default BallScaleMulti;
