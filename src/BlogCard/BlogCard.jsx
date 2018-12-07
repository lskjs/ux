import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

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
      <article
        className="blog-card"
        {...props}
      >
        <a href={link}>
          <img src={img} alt="blog cover" />
        </a>
        <div className="blog-card__body">
          <span className="blog-card__date">{date}</span>
          <h4 className="blog-card__title">{title}</h4>
          {children}
          <a href={link} className="link-animated-hover link-hover-v1 text-primary">
            Read More
            {/* <Icon type="arrow-right" /> */}
          </a>
        </div>
      </article>
    );
  }
}
