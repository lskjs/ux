import React from 'react';
import BlogCard from './BlogCard';

module.exports = ({ storiesOf }) => (
  storiesOf('BlogCard', module)
    .add('1', () => (
      <BlogCard>
        BlogCard
      </BlogCard>
    ))
);
