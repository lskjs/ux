import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import If from 'react-if';
import { Container, Col } from '../Grid';

import {
  Title,
  Subtitle,
  Footer,
  IconWrapper,
  Wrapper,
  ImageWrapper,
  ContentWrapper,
} from './SlideContent.styles';

class SlideContent extends PureComponent {
  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]),
    subtitle: PropTypes.string,
    actions: PropTypes.any,
    footer: PropTypes.string,
    image: PropTypes.any,
    align: PropTypes.string,
  };
  static defaultProps = {
    title: null,
    subtitle: null,
    actions: null,
    footer: null,
    image: null,
    align: 'left',
  };
  render() {
    const {
      image,
      icon,
      title,
      subtitle,
      actions,
      footer,
      align,
      ...props
    } = this.props;
    return (
      <Wrapper {...props}>
        <If condition={image}>
          <ImageWrapper>
            {image}
          </ImageWrapper>
        </If>
        <Container>
          <Col md={12}>
            <ContentWrapper align={align}>
              <If condition={icon}>
                <IconWrapper>
                  {icon}
                </IconWrapper>
              </If>
              <If condition={title}>
                <Title>
                  {subtitle}
                </Title>
              </If>
              <If condition={subtitle}>
                <Subtitle>
                  {subtitle}
                </Subtitle>
              </If>
              {actions}
              <If condition={footer}>
                <Footer>
                  {footer}
                </Footer>
              </If>
            </ContentWrapper>
          </Col>
        </Container>
      </Wrapper>
    );
  }
}
export default SlideContent;
