import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactWorldFlag from 'react-world-flags';
// import { css } from 'emotion';

class Flag extends PureComponent {
  static propTypes = {
    country: PropTypes.string,
    height: PropTypes.number,
  }
  static defaultProps = {
    country: 'gb',
    height: 16,
  }
  render() {
    const { country, code, height, ...props } = this.props;
    let countryOrCode = code || country || 'gb';
    if (countryOrCode === 'uk' || countryOrCode === 'en') {
      countryOrCode = 'gb';
    }
    return (
      <ReactWorldFlag
        code={countryOrCode.toUpperCase()}
        height={height}
      //   className={css`
      //    border: 2px solid black;
      //    padding: 10px;
      //    margin: 10px;
      //    background-color: #f3f3f3;
      // `}
        {...props}
      />
    );
  }
}

export default Flag;
