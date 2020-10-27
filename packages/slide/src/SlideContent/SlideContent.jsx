import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Col } from '@lskjs/grid';

import { Title, Subtitle, Footer, IconWrapper, Wrapper, ImageWrapper, ContentWrapper } from './SlideContent.styles';

class SlideContent extends PureComponent {
  render() {
    const { image, icon, title, subtitle, actions, footer, align, ...props } = this.props;
    return (
      <Wrapper {...props}>
        {!!image && <ImageWrapper>{image}</ImageWrapper>}
        <Container>
          <Col md={12}>
            <ContentWrapper align={align}>
              {!!icon && <IconWrapper>{icon}</IconWrapper>}
              {!!title && <Title>{subtitle}</Title>}
              {!!subtitle && <Subtitle>{subtitle}</Subtitle>}
              {actions}
              {!!footer && <Footer>{footer}</Footer>}
            </ContentWrapper>
          </Col>
        </Container>
      </Wrapper>
    );
  }
}

SlideContent.propTypes = {
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
SlideContent.defaultProps = {
  title: null,
  subtitle: null,
  actions: null,
  footer: null,
  image: null,
  align: 'left',
};

export default SlideContent;
