import React from 'react';
import Story from '@lskjs/dev/Story';
import Tag from './Tag';
import TagGroup from './TagGroup';

export default ({ storiesOf }) => {
  storiesOf('tag/Tag')
    .add('<Tag />', () => (
      <Story>
        <Tag />
      </Story>
    ))
    .add('<TagGroup />', () => (
      <Story>
        <TagGroup
          options={[1, 2, 3, 4].map(value => ({ value, title: value }))}
          values={[1, 2]}
          nullValue="Не выбраны теги"
          closable
          onClose={item => console.log('onClose', item)}
          onClick={item => console.log('onClick', item)}
        />
      </Story>
    ));
};
