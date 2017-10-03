import React from 'react';
import AvatarGroup from './AvatarGroup';
import _ from 'lodash';

const user = () => ({
  title: 'John Smith',
  src: `https://randomuser.me/api/portraits/men/${_.random(99)}.jpg`,
});

const userWithLink = () => ({
  title: 'John Smith',
  src: `https://randomuser.me/api/portraits/men/${_.random(99)}.jpg`,
  link: `user/link-${_.random(99)}`,
});

const userWithHref = () => ({
  title: 'John Smith',
  src: `https://randomuser.me/api/portraits/men/${_.random(99)}.jpg`,
  href: `user/href-${_.random(99)}`,
});

module.exports = function ({ storiesOf, action, knob }) {
  return storiesOf('AvatarGroup', module)
    .add('Items only', () => (
      <AvatarGroup
        items={_.range(5).map(user)}
      />
    ))
    .add('Items + limit', () => (
      <AvatarGroup
        items={_.range(5).map(user)}
        limit={3}
      />
    ))
    .add('Items + limit2', () => (
      <AvatarGroup
        items={_.range(5).map(user)}
        limit={10}
      />
    ))
    .add('Items + count', () => (
      <AvatarGroup
        items={_.range(5).map(user)}
        count={20}
      />
    ))
    .add('Items + count + limit', () => (
      <AvatarGroup
        items={_.range(5).map(user)}
        limit={3}
        count={20}
      />
    ))
    .add('count', () => (
      <AvatarGroup
        count={20}
      />
    ))
    .add('custom avatar size', () => (
      <AvatarGroup
        size={40}

        items={_.range(5).map(user)}
        limit={3}
        count={20}
      />
    ))
    .add('custom offset between avatars', () => (
      <AvatarGroup
        offset={-0.6}

        items={_.range(15).map(user)}
        count={20}
      />
    ))
    .add('disable offset between avatars', () => (
      <AvatarGroup
        offset={0}

        items={_.range(5).map(user)}
        limit={3}
        count={20}
      />
    ))
    .add('disable offset between avatars', () => (
      <AvatarGroup
        offset={0.2}

        items={_.range(5).map(user)}
        limit={3}
        count={20}
      />
    ))
    .add('Items + count + limit + link', () => (
      <div>
        <AvatarGroup
          items={_.range(5).map(userWithLink)}
          limit={3}
          count={20}
        />
        <AvatarGroup
          items={_.range(5).map(userWithHref)}
          limit={3}
          count={20}
        />
      </div>
    ))
};
