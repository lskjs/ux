import React from 'react';
import UserItem from './UserItem';
import ThemeInjector from '../../../ThemeInjector';


export default ({ storiesOf }) => (
  storiesOf('ui/UserItem', module)
    .add('default', () => (
      <ThemeInjector>
        <UserItem
          user={{
            id: 1,
            avatar: 'https://jira.isuvorov.com/secure/projectavatar?avatarId=10324',
            title: 'Hey',
          }}
        />
      </ThemeInjector>
    ))
);
