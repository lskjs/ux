import React, { PureComponent } from 'react';
import { Container, Col } from 'reactstrap';
import If from 'react-if';
import PropTypes from 'prop-types';

import {
  Title,
  Lead,
  Muted,
  Wrapper,
  ImageWrapper,
  Image,
} from './CTACentered.styles';

class CTACentered extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    actions: PropTypes.any,
    footer: PropTypes.string,
  };
  static defaultProps = {
    title: null,
    subtitle: null,
    actions: null,
    footer: null,
  };
  render() {
    const {
      title,
      subtitle,
      actions,
      footer,
    } = this.props;
    return (
      <Wrapper>
        {/* <ImageWrapper>
          <Image />
        </ImageWrapper> */}
        <Container>
          <Col md={12}>
            <Title>{title}</Title>
            <Lead>
              {subtitle}
            </Lead>
            {actions}
            <If condition={footer}>
              <Muted>{footer}</Muted>
            </If>
          </Col>
        </Container>
      </Wrapper>
    );
  }
}
export default CTACentered;
