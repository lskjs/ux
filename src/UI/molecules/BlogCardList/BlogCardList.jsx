import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Image,
  Body,
  Title,
  ImageContainer,
  TagItem,
  TitleLink,
  Content,
  Author,
} from './BlogCardList.styles';

class BlogCardList extends PureComponent {
  static propTypes = {
    link: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    href: PropTypes.string,
    tag: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,

  }
  static defaultProps = {
    link: null,
    img: null,
    title: null,
    href: null,
    tag: null,
    content: null,
    author: null,
  }
  render() {
    const {
      link,
      img,
      title,
      href,
      tag,
      content,
      author,
    } = this.props;
    return (
      <Wrapper>
        <ImageContainer href={link}>
          <Image src={img} alt="Blog cover"/>
        </ImageContainer>
        <Body>
          <TagItem>{tag}</TagItem>
          <TitleLink href={href} ><Title>{title}</Title></TitleLink>
          <Content>{content}</Content>
          <Author>{author}</Author>
        </Body>
      </Wrapper>
    );
  }
}

export default BlogCardList;
