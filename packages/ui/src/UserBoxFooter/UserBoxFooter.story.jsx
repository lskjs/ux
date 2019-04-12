import React from 'react';
import Button from '@lskjs/button';
import Story from '@lskjs/dev/Story';
import UserBoxFooter from './UserBoxFooter';

export default ({ storiesOf }) => (
  storiesOf('ui/UserBoxFooter', module)
    .add('default', () => (
      <Story>
        <UserBoxFooter
          user={{
            title: 'Иван Иванович',
            avatar: 'https://picsum.photos/200?random',
            _id: 1,
          }}
          subtitle="Технический директор"
          actions={(
            <Button>Редактировать</Button>
          )}
        />
      </Story>
    ))
);
