import React from 'react';
import AvatarGroup from './AvatarGroup';
import range from 'lodash/range';
import random from 'lodash/random';

const user = () => ({
  title: 'John Smith',
  src: `https://randomuser.me/api/portraits/men/${random(99)}.jpg`,
});

const userWithLink = () => ({
  title: 'John Smith',
  src: `https://randomuser.me/api/portraits/men/${random(99)}.jpg`,
  link: `user/link-${random(99)}`,
});

const userWithHref = () => ({
  title: 'John Smith',
  src: `https://randomuser.me/api/portraits/men/${random(99)}.jpg`,
  href: `user/href-${random(99)}`,
});

module.exports = function ({ storiesOf, action, knob }) {
  return storiesOf('AvatarGroup', module)
    .add('Items only', () => (
      <AvatarGroup
        items={range(5).map(user)}
      />
    ))
    .add('Items + limit', () => (
      <AvatarGroup
        items={range(5).map(user)}
        limit={3}
      />
    ))
    .add('Items + limit2', () => (
      <AvatarGroup
        items={range(5).map(user)}
        limit={10}
      />
    ))
    .add('Items + count', () => (
      <AvatarGroup
        items={range(5).map(user)}
        count={20}
      />
    ))
    .add('Items + count + limit', () => (
      <AvatarGroup
        items={range(5).map(user)}
        limit={3}
        count={20}
      />
    ))
    .add('Items in order + limit', () => {
      const users = range(5).map((i, a)=>({
        title: (i+"" + a),
      }));
      return (
        <div>
          <AvatarGroup
            items={users}
            limit={4}
          />
        </div>
      )
    })
    .add('Items in order + limit + avatarInnerStyle', () => {
      const users = range(5).map((i, a)=>({
        title: (i+"" + a),
      }));
      const users2 = range(5).map((i, a)=>({
        title: "John Smith",
      }));
      return (
        <div>
          <AvatarGroup
            avatarInnerStyle={{border: '4px solid rgb(255, 255, 255)'}}
            items={users}
            limit={4}
          />
          <AvatarGroup
            avatarInnerStyle={{border: '3px solid rgb(255, 255, 255)', lineHeight: (40 - 3 + 'px'), fontWeight: 'bold', color: '#fff' }}
            items={users2}
            limit={4}
            size={40}
            offset={-0.25}
          />
        </div>
      )
    })
    .add('count', () => (
      <AvatarGroup
        count={20}
      />
    ))
    .add('custom avatar size', () => (
      <AvatarGroup
        size={40}

        items={range(5).map(user)}
        limit={3}
        count={20}
      />
    ))
    .add('custom offset between avatars', () => (
      <AvatarGroup
        offset={-0.6}

        items={range(15).map(user)}
        count={20}
      />
    ))
    .add('disable offset between avatars', () => (
      <AvatarGroup
        offset={0}

        items={range(5).map(user)}
        limit={3}
        count={20}
      />
    ))
    .add('disable offset between avatars', () => (
      <AvatarGroup
        offset={0.2}

        items={range(5).map(user)}
        limit={3}
        count={20}
      />
    ))
    .add('Items + count + limit + link', () => (
      <div>
        <AvatarGroup
          items={range(5).map(userWithLink)}
          limit={3}
          count={20}
        />
        <AvatarGroup
          items={range(5).map(userWithHref)}
          limit={3}
          count={20}
        />
      </div>
    ))
};
