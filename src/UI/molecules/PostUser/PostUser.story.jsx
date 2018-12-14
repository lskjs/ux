import React from 'react';
import PostUser from './PostUser';
import ThemeInjector from '../../../ThemeInjector';

module.exports = ({ storiesOf }) => (
  storiesOf('PostUser', module)
    .add('Default', () => (
      <ThemeInjector>
        <div style={{ padding: 60 }}>
          <PostUser
            user={{
              title: 'Имя Фамилия',
              avatar: 'https://picsum.photos/100/?random',
            }}
          />
        </div>
      </ThemeInjector>
    ))
    .add('With role', () => (
      <ThemeInjector>
        <div style={{ padding: 60 }}>
          <PostUser
            user={{
              title: 'Имя Фамилия',
              avatar: 'https://picsum.photos/100/?random',
            }}
            subtitle="Модератор"
          />
        </div>
      </ThemeInjector>
    ))
    .add('With category', () => (
      <ThemeInjector>
        <div style={{ padding: 60 }}>
          <PostUser
            user={{
              title: 'Имя Фамилия',
              avatar: 'https://picsum.photos/100/?random',
            }}
            category={{
              title: 'Для всех',
            }}
          />
        </div>
      </ThemeInjector>
    ))
    .add('With category 2', () => (
      <ThemeInjector>
        <div style={{ padding: 60 }}>
          <PostUser
            user={{
              title: 'Имя Фамилия',
              avatar: 'https://picsum.photos/100/?random',
            }}
            category={{
              title: 'Для друзей',
              color: 'red',
            }}
          />
        </div>
      </ThemeInjector>
    ))

    .add('With role & category', () => (
      <ThemeInjector>
        <div style={{ padding: 60 }}>
          <PostUser
            user={{
              title: 'Имя Фамилия',
              avatar: 'https://picsum.photos/100/?random',
            }}
            subtitle="Модератор"
            category={{
              title: 'Для всех',
            }}
          />
        </div>
      </ThemeInjector>
    ))
);
