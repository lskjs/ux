import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import Tag from './BlogCard.styles';
import { Wrapper, Img, Body, Date, Title } from './BlogCard.styles';


export default class BlogCard extends PureComponent {
  render() {
    const {
      children,
      link,
      img,
      date,
      title,
      ...props
    } = this.props;
    return (
      <Wrapper
        {...props}
      >
        <a href={link}>
          <Img
            src={img}
            alt="blog cover"
          />
        </a>
        <Body>
          <Date>{date}</Date>
          <Title>{title}</Title>
          {children}
          <a href={link} className="link-animated-hover link-hover-v1 text-primary">
            Read More
            {/* <Icon type="arrow-right" /> */}
          </a>
        </Body>
      </Wrapper>
    );
  }
}
