import React from 'react';
import TestImonialV3 from './TestImonialV3';
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

export default ({ storiesOf }) => (
  storiesOf('ui/TestImonialV3', module)
    .add('default', () => (
      <div style={{ padding: 60, backgroundColor: 'red' }}>
        <ThemeInjector>
          <TestImonialV3 {...articles[0]} />
        </ThemeInjector>
      </div>
    ))
);
