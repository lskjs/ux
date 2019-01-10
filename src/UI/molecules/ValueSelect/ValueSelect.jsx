import React, { PureComponent } from 'react';
import { withTheme } from 'emotion-theming';
// import PropTypes from 'prop-types';
import { Option, Image, Title, Icon } from './ValueSelect.styles';

// import omit from 'lodash/omit';

@withTheme
class ValueSelect extends PureComponent {
  render() {
    const {
      data,
      // ...props
    } = this.props;
    return (
      <Option image={data.image}>
        <If condition={!data.iconActive}>
          <Icon icon={data.icon}>
            {data.icon}
          </Icon>
        </If>
        <If condition={data.image}>
          {typeof data.image === 'string' ? <Image src={data.image} /> : data.image}
        </If>
        <Title image={data.image}>
          {data.title}
        </Title>
      </Option>
    );
  }
}

export default ValueSelect;
