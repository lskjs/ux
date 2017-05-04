import React from 'react';
import Avatar from './Avatar';
import _ from 'lodash';

const rndNum = 1;
const avatarImg = `https://randomuser.me/api/portraits/men/${rndNum}.jpg`;

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Avatar', module)
    .add('default', () => (
      <Avatar src={avatarImg} name="John Smith" />
    ))
    .add('no avatar', () => (
      <Avatar name="John Smith" />
    ))
    .add('sizes', () => (
      <div>
        <Avatar src={avatarImg} name="John Smith" size={32} />
        <Avatar src={avatarImg} name="John Smith" size={64} />
        <Avatar src={avatarImg} name="John Smith" size={100} />
      </div>
    ))
    .add('border', () => (
      <div>
        <Avatar src={avatarImg} name="John Smith" border />
        <Avatar src={avatarImg} name="John Smith" border borderWidth={2} borderColor="#4CAF50" />
        <Avatar src={avatarImg} name="John Smith" border borderWidth={4} borderColor="#F44336" />
      </div>
    ))
    .add('badges', () => (
      <div>
        <Avatar src={avatarImg} name="John Smith" badgeContent={<div style={{ width: 10, height: 10, backgroundColor: '#4CAF50', borderRadius: '50%', position: 'absolute', right: '0px', bottom: '0px', border: '2px solid #fff' }} />} />
        <Avatar name="Offline" badgeContent={<div style={{ width: 10, height: 10, backgroundColor: '#F44336', borderRadius: '50%', position: 'absolute', right: '0px', bottom: '0px', border: '2px solid #fff' }} />} />
      </div>
    ))
    .add('inactive', () => (
      <div>
        <Avatar src={avatarImg} name="John Smith" inactive />
        <Avatar name="John Smith" inactive />
      </div>
    ))
    .add('shadow', () => (
      <div>
        <Avatar src={avatarImg} name="John Smith" shadow />
      </div>
    ))
    .add('shapes', () => (
      <div>
        <Avatar src={avatarImg} name="John Smith" shape="circle" />
        <Avatar src={avatarImg} name="John Smith" shape="square" />
        <Avatar src={avatarImg} name="John Smith" shape="rounded" />
      </div>
    ));
};
