import React, { Component } from 'react';
import Flag from '../../Flag';
import T from '../../T';
import BaseFilterTag from './BaseFilterTag';

class CountryFilterTag extends Component { //eslint-disable-line
  render() {
    const { title, code, value, ...props } = this.props;
    return (
      <BaseFilterTag {...props}>
        {`${title}: `}
        <Flag
          code={code}
          style={{ width: 22, height: 15, margin: '0 4px' }}
        />
        {' '}
        <T name={`country.${code}`} />
      </BaseFilterTag>
    );
  }
}

export default CountryFilterTag;
