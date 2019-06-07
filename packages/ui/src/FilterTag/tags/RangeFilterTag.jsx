import React from 'react';
import T from '../../T';
import Join from '../../Join';
import BaseFilterTag from './BaseFilterTag';


const RangeFilterTag = ({ title, value, ...props }) => {
  const val = [];
  val[0] = value[0] || <T name="common.min" />;
  val[1] = value[1] || <T name="common.max" />;
  if (!Array.isArray(value)) return null;
  return (
    <BaseFilterTag {...props}>
      {title}
      {': '}
      <Join items={val} glue=" - " />
    </BaseFilterTag>
  );
};

export default RangeFilterTag;
