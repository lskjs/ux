import React, { PureComponent } from 'react';
import { withTheme } from 'emotion-theming';
// import PropTypes from 'prop-types';
import { Option, Image, Title } from './ValueSelect.styles';

// import omit from 'lodash/omit';

@withTheme
class ValueSelect extends PureComponent {
  render() {
    const {
      value,
      data,
      isMulti,
      // ...props
    } = this.props;
    console.log('PROPS', this.props);
    console.log(data);
    // console.log(this.props);
    // console.log(value.image);
    return (
      <Option image={data.image}>
        <If condition={isMulti}>
          Выбрано:
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
