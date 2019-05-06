import React from 'react';
import PropTypes from 'prop-types';
import BaseFilterTag from './tags/BaseFilterTag';
import ArrayFilterTag from './tags/ArrayFilterTag';
import RangeFilterTag from './tags/RangeFilterTag';
import MoreThanFilterTag from './tags/MoreThanFilterTag';
import CountryFilterTag from './tags/CountryFilterTag';

const FilterTag = ({ type, ...props }) => {
  if (type === 'array') return <ArrayFilterTag {...props} />;
  if (type === 'range') return <RangeFilterTag {...props} />;
  if (type === 'moreThan') return <MoreThanFilterTag {...props} />;
  if (type === 'country') return <CountryFilterTag {...props} />;
  return <BaseFilterTag {...props} />;
};

FilterTag.propTypes = {
  type: PropTypes.string,
};

FilterTag.defaultProps = {
  type: null,
};

export default FilterTag;
