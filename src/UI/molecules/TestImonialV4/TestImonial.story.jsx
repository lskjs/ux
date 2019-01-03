import React from 'react';
import TestImonialV4 from './TestImonialV4';
import ThemeInjector from '../../../ThemeInjector';
import '../../../styles/lib/antd.g.css';

const articles = [
  {
    avatar: 'https://picsum.photos/200',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione consequuntur ut placeat.',
    name: 'Jason Bourne',
    title: 'Senior PM',
  },
];

module.exports = ({ storiesOf }) => (
  storiesOf('ui/TestImonialV4', module)
    .add('default', () => (
      <div style={{ padding: 60, backgroundColor: 'red' }}>
        <ThemeInjector>
          <TestImonialV4 {...articles[0]} />
        </ThemeInjector>
      </div>
    ))
);
