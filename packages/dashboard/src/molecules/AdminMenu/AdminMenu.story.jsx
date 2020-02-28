/* eslint-disable */
import React, { Component } from 'react';
import Link from '@lskjs/ui/Link';
import Story from '@lskjs/dev/Story';
import AdminMenu from './AdminMenu';
import Modal from '@lskjs/modal';
import Icon from 'antd/lib/icon';

// const SidenavModalSidebarMenuModal = ({ ref, children }) => (
//   <Modal
//     ref={(e) => { if (ref) ref(e); }}
//     size="small"
//     trigger={children}
//     title="title"
//     subtitle="subtitle"
//     image="https://picsum.photos/1280/720/?random"
//     content="content"
//     footer="footer"
//     onClose={() => console.log('onClose')}
//     onOpen={() => console.log('onOpen')}
//   />
// );

const SidenavModal = ({ ref, children }) => (
  <Modal
    ref={(e) => { if (ref) ref(e); }}
    size="small"
    trigger={children}
    title="title"
    subtitle="subtitle"
    image="https://picsum.photos/1280/720/?random"
    content="content"
    footer="footer"
    onClose={() => console.log('onClose')}
    onOpen={() => console.log('onOpen')}
  />
);

class Parent extends Component {
  state = {
    active: [],
  }
  render() {
    const { active } = this.state;
    return (
      <div>
        <button onClick={() => { this.setState({ active: ['payments'] }); }}>SET Payments</button>
        <button onClick={() => { this.setState({ active: ['google'] }); }}>SET Google</button>
        <State active={active} />
      </div>
    );
  }
}

class State extends Component {
  modal = null;
  render() {
    const items3 = [
      {
        key: 'managers',
        title: 'Задачи менеджеров',
        label: 4,
      },
      'divider',
      {
        key: 'users',
        title: 'Пользователи',
        href: 'https://google.ru',
        hrefProps: {
          target: '_blank',
        },
        submenu: [
          {
            key: 'group',
            title: 'Категория',
            submenu: [
              {
                key: 'unmoderated',
                title: 'Непромодерированные',
                label: 270,
              },
              {
                key: 'bloggers',
                title: 'Блогеры',
              },
            ],
          },
          {
            key: 'customers',
            title: 'Рекламодатели',
          },
          'divider',
          {
            key: 'newUsersList',
            title: 'Создать список пользователей',
            href: 'https://google.ru',
            hrefProps: {
              target: '_blank',
            },
          },
        ],
      },
      {
        key: 'offers',
        title: 'Предложения',
      },
      {
        key: 'deals',
        title: 'Сделки',
      },
      {
        key: 'google',
        title: 'Google',
        label: 3,
        href: 'https://google.ru',
        hrefProps: {
          target: '_blank',
        },
      },
      {
        key: 'withdraw',
        title: 'Заявки на вывод',
        href: '/?selectedKind=General%2FTest&selectedStory=default',
        componentClass: Link,
      },
      {
        key: 'payments',
        title: 'Payments',
      },
      {
        key: 'reports',
        title: 'Отчётность',
      },
      {
        key: 'reportFromPeriod',
        title: 'Отчёт за период',
      },
      {
        key: 'basket',
        title: 'Корзина',
      },
      {
        key: 'funnel',
        title: 'Воронка',
      },
      {
        key: 'modal',
        title: 'Открыть модалку',
        onClick: () => {
          console.log(this.modal);
          this.modal.open();
        },
      },
    ];
    const { active, onChange } = this.props;
    return (
      <Story>
        <div style={{ width: 280 }}>
          <code>{JSON.stringify(active, null ,2)}</code>
          <AdminMenu
            theme="light"
            mode="inline"
            active={active}
            items={items3}
            onChange={onChange} // eslint-disable-line no-console
          />
        </div>
        <SidenavModal ref={(e) => { this.modal = e; }} />
      </Story>
    );
  }
}

const items1 = [
  {
    key: 'managers',
    title: 'Задачи менеджеров',
    label: 4,
  },
  {
    key: 'users',
    title: 'Пользователи',
    submenu: [
      {
        key: 'all',
        title: 'Все пользователи',
      },
      {
        key: 'unmoderated',
        title: 'Непромодерированные',
        label: 270,
      },
      {
        key: 'bloggers',
        title: 'Блогеры',
      },
      {
        key: 'customers',
        title: 'Рекламодатели',
      },
      'divider',
      {
        key: 'newUsersList',
        title: 'Создать список пользователей',
      },
    ],
  },
  {
    key: 'offers',
    title: 'Предложения',
  },
  {
    key: 'deals',
    title: 'Сделки',
  },
  {
    key: 'transactions',
    title: 'Транзакции',
    label: 3,
  },
  {
    key: 'withdraw',
    title: 'Заявки на вывод',
  },
  {
    key: 'payments',
    title: 'Payments',
  },
  {
    key: 'reports',
    title: 'Отчётность',
  },
  {
    key: 'reportFromPeriod',
    title: 'Отчёт за период',
  },
  {
    key: 'basket',
    title: 'Корзина',
  },
  {
    key: 'funnel',
    title: 'Воронка',
  },
];

const items2 = [
  {
    key: 'managers',
    title: 'Задачи менеджеров',
    label: 4,
  },
  'divider',
  {
    key: 'users',
    title: 'Пользователи',
    href: 'https://google.ru',
    hrefProps: {
      target: '_blank',
    },
    submenu: [
      {
        key: 'group',
        title: 'Категория',
        submenu: [
          {
            key: 'unmoderated',
            title: 'Непромодерированные',
            label: 270,
          },
          {
            key: 'bloggers',
            title: 'Блогеры',
          },
        ],
      },
      {
        key: 'customers',
        title: 'Рекламодатели',
      },
      'divider',
      {
        key: 'newUsersList',
        title: 'Создать список пользователей',
        href: 'https://google.ru',
        hrefProps: {
          target: '_blank',
        },
      },
    ],
  },
  {
    key: 'offers',
    title: 'Предложения',
  },
  {
    key: 'deals',
    title: 'Сделки',
  },
  {
    key: 'google',
    title: 'Google',
    label: 3,
    href: 'https://google.ru',
    hrefProps: {
      target: '_blank',
    },
  },
  {
    key: 'withdraw',
    title: 'Заявки на вывод',
    href: '/?selectedKind=General%2FTest&selectedStory=default',
    componentClass: Link,
  },
  {
    key: 'payments',
    title: 'Payments',
  },
  {
    key: 'reports',
    title: 'Отчётность',
  },
  {
    key: 'reportFromPeriod',
    title: 'Отчёт за период',
  },
  {
    key: 'basket',
    title: 'Корзина',
  },
  {
    key: 'funnel',
    title: 'Воронка',
  },
  {
    key: 'modal',
    title: 'Открыть модалку',
    onClick: () => alert('click'),
  },
];

module.exports = ({ storiesOf }) =>
  storiesOf('dashboard/molecules/AdminMenu', module)
    .add('Default', () => {
      return (
        <Story>
          <div style={{ padding: '60px 20px', background: 'black' }}>
            <AdminMenu
              active={['managers']}
              items={items1}
              onChange={e => console.log(e)} // eslint-disable-line no-console
            />
          </div>
        </Story>
      );
    })
    .add('More', () => {
      return (
        <Story>
          <div style={{ padding: '60px 20px', background: 'black' }}>
            <AdminMenu
              active={['users', 'customers', 'offers']}
              items={items2}
              onChange={e => console.log(e)} // eslint-disable-line no-console
            />
          </div>
        </Story>
      );
    })
    .add('Theme light', () => {
      return (
        <Story>
          <div style={{ padding: '60px 20px', background: 'black' }}>
            <AdminMenu
              theme="light"
              active={['users', 'customers']}
              items={items2}
              onChange={e => console.log(e)} // eslint-disable-line no-console
            />
          </div>
        </Story>
      );
    })
    .add('Vertical menu dark', () => {
      return (
        <Story>
          <div style={{ padding: '60px 20px', background: 'black' }}>
            <AdminMenu
              theme="dark"
              mode="vertical"
              active={['users', 'customers']}
              items={items2}
              onChange={e => console.log(e)} // eslint-disable-line no-console
            />
          </div>
        </Story>
      );
    })
    .add('Vertical menu light', () => {
      return (
        <Story>
          <div style={{ padding: '60px 20px', background: 'black' }}>
            <AdminMenu
              theme="light"
              mode="vertical"
              active={['users', 'customers']}
              items={items2}
              onChange={e => console.log(e)} // eslint-disable-line no-console
            />
          </div>
        </Story>
      );
    })
    .add('Inline menu dark', () => {
      return (
        <Story>
          <div style={{ padding: '60px 20px', background: 'black' }}>
            <AdminMenu
              theme="dark"
              mode="inline"
              active={['users', 'customers']}
              items={items2}
              onChange={e => console.log(e)} // eslint-disable-line no-console
            />
          </div>
        </Story>
      );
    })
    .add('Left Menu', () => {
      return (
        <Story>
          <AdminMenu
            theme="light"
            mode="vertical"
            items={[
              {
                key: '/cabinet/profile',
                isSelected: ({ req }) => true,
                href: '/cabinet/profile',
                componentClass: Link,
                icon: <Icon type="user" />,
                title: 'Profile',
              },
              {
                key: '/cabinet/events',
                href: '/cabinet/events',
                componentClass: Link,
                icon: <Icon type="schedule" />,
                title: "Events",
              },
              {
                key: '/cabinet/users',
                href: '/cabinet/users',
                componentClass: Link,
                icon: <Icon type="team" />,
                title: 'Users',
              },
              {
                key: '/cabinet/companies',
                href: '/cabinet/companies',
                componentClass: Link,
                icon: <Icon type="bank" />,
                title: 'Companies',
              },
              'divider',
              {
                key: '/admin/users',
                href: '/admin/users',
                componentClass: Link,
                icon: <Icon type="team" />,
                title: 'Admin Users',
              },
              {
                key: '/admin/companies',
                href: '/admin/companies',
                componentClass: Link,
                icon: <Icon type="bank" />,
                title: 'Admin Companies',
              },
              {
                key: '/admin/events',
                href: '/admin/events',
                componentClass: Link,
                icon: <Icon type="schedule" />,
                title:  'Admin Events',
              },
              {
                key: '/admin/eventUsers',
                href: '/admin/eventUsers',
                componentClass: Link,
                icon: <Icon type="user" />,
                title:  'Admin Users',
              },
              'divider',
              {
                componentClass: () => <SidenavModal>SidenavModal</SidenavModal>,
              },
            ]}
            onChange={e => console.log(e)} // eslint-disable-line no-console
          />
        </Story>
      );
    })
    .add('Bottom Menu', () => {
      return (
        <Story>
          <AdminMenu
            theme="light"
            items={[
              {
                key: '/cabinet/profile',
                icon: <Icon type="user" />,
                title: 'Profile',
              },
              {
                key: '/cabinet/events',
                isSelected: () => true,
                icon: <Icon type="schedule" />,
                title: 'Events',
              },
              {
                key: '/cabinet/users',
                icon: <Icon type="team" />,
                title: 'Users',
              },
              {
                key: '/cabinet/companies',
                icon: <Icon type="bank" />,
                title: 'Companies',
              },
            ]}
            onChange={e => console.log(e)} // eslint-disable-line no-console
          />
        </Story>
      );
    })
    .add('Inline menu light', () => {
      return <Parent />;
    });
