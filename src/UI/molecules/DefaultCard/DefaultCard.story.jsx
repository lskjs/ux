import React from 'react';
import ThemeInjector from '../../../ThemeInjector';
import DefaultCard from './DefaultCard';

module.exports = ({ storiesOf }) =>
  storiesOf('DefaultCard', module)
    .add('DefaultCard', () => {
      return (
        <ThemeInjector>
          <DefaultCard
            user={{
              title: 'User 1',
              position: 'Director',
              rating: 123.3,
            }}
          />
        </ThemeInjector>
      );
    });
