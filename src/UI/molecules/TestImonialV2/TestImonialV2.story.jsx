import React from 'react';
import TestImonialV2 from './TestImonialV2';
import ThemeInjector from '../../../ThemeInjector';
import '../../../styles/lib/antd.g.css';

const articles = [
  {
    avatar: 'https://picsum.photos/200',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione consequuntur ut placeat.',
    name: 'Jason Bourne',
    title: 'Senior PM',
    paint: 'info',
  },
];

export default ({ storiesOf }) => (
  storiesOf('ui/TestImonialV2', module)
    .add('default', () => (
      <div style={{ padding: 60, backgroundColor: 'red' }}>
        <ThemeInjector>
          <TestImonialV2 {...articles[0]} />
        </ThemeInjector>
      </div>
    ))
);
