import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Flag from 'react-world-flags';
import { css } from 'emotion';


class Flags extends Component {
  static propTypes = {
    country: PropTypes.string,
    height: PropTypes.string,
  }
  static defaultProps = {
    country: 'RU',
    height: '16',
  }
  render() {
    const { country, height } = this.props;
    return (
      <Flag
        code={country}
        height={height}
        className={css`
         border: 2px solid black;
         padding: 10px;
         margin: 10px;
         background-color: #f3f3f3;
      `}
      />
    );
  }
}

export default Flags;

