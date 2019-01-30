import React from 'react';
import CalloutRight from './CalloutRight';
import ThemeInjector from '../../../ThemeInjector';

const articles = [
  {
    title: 'Architecto odit fuga facere',
    buttonText: 'Try it Now',
    content: 'Culpa eveniet labore cupiditate at maiores dignissimos, nesciunt quam porro accusantium velit quas? Nam nobis, deleniti inventore consequuntur quos vero voluptatum nostrum error porro mollitia, accusantium distinctio nemo expedita ipsum quisquam laboriosam',
  },
];
export default ({ storiesOf }) => (
  storiesOf('ui/CalloutRight', module)
    .add('Default', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <CalloutRight {...articles[0]} />
        </ThemeInjector>
      </div>
    ))
);
