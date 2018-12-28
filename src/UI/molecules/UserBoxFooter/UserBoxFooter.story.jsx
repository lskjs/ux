import React from 'react';
import Button from '../../../Button';
import UserBoxFooter from './UserBoxFooter';

module.exports = ({ storiesOf }) => (
  storiesOf('ui/UserBoxFooter', module)
    .add('default', () => (
      <div style={{ padding: 60, backgroundColor: 'grey' }}>
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
      </div>
    ))
);
