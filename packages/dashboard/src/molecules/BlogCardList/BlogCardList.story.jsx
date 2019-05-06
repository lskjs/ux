import React from 'react';
import range from 'lodash/range';
import BlogCardList from './BlogCardList';
import Story from '@lskjs/dev/Story';

const articles = [
  {
    img: 'https://picsum.photos/500/300',
    date: 'May 1st',
    title: 'Be Yourself',
    content: 'Be yourself; everyone else is already taken.',
    tag: 'Quotes',
    author: 'Oscar Wilde',
    href: '',
    imgObjectFit: 'cover',
  },
  {
    img: 'https://picsum.photos/500/300',
    date: 'May 1st',
    title: 'Be Yourself',
    content: 'Be yourself; everyone else is already taken.',
    tag: 'Quotes',
    author: 'Oscar Wilde',
    href: '',
    imgObjectFit: 'fill',
  },
  {
    img: 'https://picsum.photos/500/300',
    date: 'May 1st',
    title: 'Be Yourself',
    content: 'Be yourself; everyone else is already taken.',
    tag: 'Quotes',
    author: 'Oscar Wilde',
    href: '',
    imgObjectFit: 'contain',
  },
  {
    img: 'https://picsum.photos/500/300',
    date: 'May 1st',
    title: 'Be Yourself',
    content: 'Be yourself; everyone else is already taken.',
    tag: 'Quotes',
    author: 'Oscar Wilde',
    href: '',
    imgObjectFit: 'none',
  },
  {
    img: 'https://picsum.photos/500/300',
    date: 'May 1st',
    title: 'Be Yourself',
    content: 'Be yourself; everyone else is already taken.',
    tag: 'Quotes',
    author: 'Oscar Wilde',
    href: '',
    imgObjectFit: 'scale-down',
  },
];

export default ({ storiesOf }) => (
  storiesOf('ui/BlogCardList', module)
    .add('BlogCardList', () => (
      <div>
        {range(5).map(i => <div style={{ padding: 60 }}><Story><BlogCardList {...articles[i]} /></Story></div>)}
      </div>
    ))
);
