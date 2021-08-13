import isEqual from 'lodash.isequal';
import pick from 'lodash.pick';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { components } from 'react-select';

import { Icon, Image, Option, Title } from './SingleValue.styles';

const SingleValue = (props) => {
  const { data } = props;
  const sCUFields = ['data', 'isDisabled'];
  let ImageComponent = data.image;
  if (typeof data.image === 'string') ImageComponent = <Image src={data.image} />;
  function shouldUpdate(nextProps) {
    const params = pick(props, sCUFields);
    const nextParams = pick(nextProps, sCUFields);
    return !isEqual(params, nextParams);
  }
  useMemo(() => shouldUpdate(props), [props]);
  return (
    <components.SingleValue data={data} {...props}>
      <Option image={data.image} value={data.value}>
        {!data.iconActive && (
          <Icon icon={data.icon} style={data.iconColor ? { color: data.iconColor } : {}}>
            {data.icon}
          </Icon>
        )}
        {!!data.image && <ImageComponent />}
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
