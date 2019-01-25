import React from 'react';
import TestImonialV1 from './TestImonialV1';
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
  storiesOf('ui/TestImonialV1', module)
    .add('default', () => (
      <div style={{ padding: 60, backgroundColor: 'red' }}>
        <ThemeInjector>
          <TestImonialV1 {...articles[0]} />
        </ThemeInjector>
      </div>
    ))
);
