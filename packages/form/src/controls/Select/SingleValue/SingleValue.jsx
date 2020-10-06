import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';
import isEqual from 'lodash/isEqual';
import pick from 'lodash/pick';
import If from 'react-if';
import { Option, Image, Title, Icon } from './SingleValue.styles';

const SingleValue = (props) => {
  const { data } = props;
  const sCUFields = ['data', 'isDisabled'];
  function shouldUpdate(nextProps) {
    const params = pick(props, sCUFields);
    const nextParams = pick(nextProps, sCUFields);
    return !isEqual(params, nextParams);
  }
  useMemo(() => shouldUpdate(props), [props]);
  return (
    <components.SingleValue data={data} {...props}>
      <Option image={data.image} value={data.value}>
        <If condition={!data.iconActive}>
          <Icon icon={data.icon} style={data.iconColor ? { color: data.iconColor } : {}}>
            {data.icon}
          </Icon>
        </If>
        <If condition={!!data.image}>{typeof data.image === 'string' ? <Image src={data.image} /> : data.image}</If>
        <Title image={data.image}>{data.label}</Title>
      </Option>
    </components.SingleValue>
  );
};

SingleValue.propTypes = {
  data: PropTypes.objectOf(Object),
};
SingleValue.defaultProps = {
  data: null,
};

export default SingleValue;
