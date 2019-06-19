import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import BaseFilterTag from './tags/BaseFilterTag';
import ArrayFilterTag from './tags/ArrayFilterTag';
import RangeFilterTag from './tags/RangeFilterTag';
import MoreThanFilterTag from './tags/MoreThanFilterTag';
import CountryFilterTag from './tags/CountryFilterTag';

const getProp = (obj, name) => (
  get(obj, `props.${name}`, get(obj, `constructor.${name}`))
);

class FilterTag extends Component { //eslint-disable-line
  static Array = ArrayFilterTag;
  static Range = RangeFilterTag;
  static MoreThan = MoreThanFilterTag;
  static Country = CountryFilterTag;
  static Base = BaseFilterTag;

  render() {
    const { type, ...props } = this.props;
    const Filter = {  //eslint-disable-line
      Array: getProp(this, 'Array'),
      Range: getProp(this, 'Range'),
      MoreThan: getProp(this, 'MoreThan'),
      Country: getProp(this, 'Country'),
      Base: getProp(this, 'Base'),
    };
    if (type === 'array') return <Filter.Array {...props} />;
    if (type === 'range') return <Filter.Range {...props} />;
    if (type === 'moreThan') return <Filter.MoreThan {...props} />;
    if (type === 'country') return <Filter.Country {...props} />;
    return <Filter.Base {...props} />;
  }
}

FilterTag.propTypes = {
  type: PropTypes.string,
};

FilterTag.defaultProps = {
  type: null,
};

export default FilterTag;
