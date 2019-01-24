import React from 'react';
import Story from '../Story';
import PageList from './PageList';
// import repeat from 'lodash/repeat';

module.exports = ({ storiesOf, action }) => {
  return storiesOf('PageList', module)
    .add('default', () => (
      <Story>
        <PageList>
          Default PageList
        </PageList>
      </Story>
    ))
    .add('default 2', () => (
      <Story>
        <PageList>
          Default PageList 2
        </PageList>
      </Story>
    ))
    .add('default 3', () => (
      <Story>
        <PageList>
          Default PageList 3
        </PageList>
      </Story>
    ));
};
