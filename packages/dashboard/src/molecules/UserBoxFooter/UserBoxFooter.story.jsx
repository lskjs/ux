import React from 'react';
import Button from '@lskjs/button';
import UserBoxFooter from './UserBoxFooter';
import Story from '@lskjs/dev/Story';

export default ({ storiesOf }) => (
  storiesOf('dashboard/ui/UserBoxFooter', module)
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
