import React, { PureComponent } from 'react';
import If from 'react-if';
import PropTypes from 'prop-types';
import CTACentered from '../CTACentered';

import {
  ImageWrapper,
  Wrapper,
} from './ErrorComponent.styles';

class ErrorComponent extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    actions: PropTypes.any,
    footer: PropTypes.string,
    image: PropTypes.any,
  };
  static defaultProps = {
    title: null,
    subtitle: null,
    actions: null,
    footer: null,
    image: null,
  };
  render() {
    const {
      image,
      title,
      subtitle,
      actions,
      footer,
      ...props
    } = this.props;
    return (
      <Wrapper {...props}>
        <If condition={image}>
          <ImageWrapper>
            {image}
          </ImageWrapper>
        </If>
        <CTACentered
          title={title}
          subtitle={subtitle}
          actions={actions}
          footer={footer}
        />
      </Wrapper>
    );
  }
}
export default ErrorComponent;
