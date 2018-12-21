import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Content, Title, Button } from './CTAInline.styles';

class CTAInline extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    buttonText: PropTypes.string,
  };
  static defaultProps = {
    title: null,
    buttonText: null,
  };
  render() {
    const {
      title,
      buttonText,
    } = this.props;
    return (
      <Content>
        <Title>{title}</Title>
        <div>
          <Button type="defaul">{buttonText}</Button>
        </div>
      </Content>
    );
  }
}
export default CTAInline;
