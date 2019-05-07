import React, { Component } from 'react';
import range from 'lodash/range';
import Story from '@lskjs/dev/Story';
import autobind from 'core-decorators/lib/autobind';
import PropTypes from 'prop-types';
import List from 'antd/lib/list';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Tooltip from 'antd/lib/tooltip';
import Badge from 'antd/lib/badge';
import { inject, observer } from 'mobx-react';
import Link from '@lskjs/ui/Link';
import FlagIcon from '@lskjs/ui/Flag';
import T from '@lskjs/ui/T';
import HeaderDropdown from '../../atoms/HeaderDropdown';
import LayoutNotificationIcon from '../../atoms/LayoutNotificationIcon';
import LayoutHeaderListItem from '../../atoms/LayoutHeaderListItem';
import ListFooterItem from '../../atoms/ListFooterItem';
import LayoutHeaderChangeLocale from '../LayoutHeaderChangeLocale';
import LayoutHeaderNotifications from '../LayoutHeaderNotifications';
import LayoutHeaderNotificationsContent from '../LayoutHeaderNotificationsContent';
import LayoutHeaderSearchBox from '../LayoutHeaderSearchBox';
import LayoutHeaderUserMenu from '../LayoutHeaderUserMenu';
import LayoutHeader from '.';
import ListItem from '../ListItem';
import LocaleTitle from '../../atoms/LocaleTitle';

import { notificationsData, messagesData, tasksData } from './Header.mock';

const tabs = [
  {
    key: 'notifications',
    title: i18.t('notification.menu.notify', { count: 4 }),
    icon: 'notification',
    content: (
      <List
        footer={(
          <ListFooterItem href="#!">
            <T name="components.headerReadAll" />
            <Icon type="arrow-right" />
          </ListFooterItem>
        )}
        itemLayout="horizontal"
        dataSource={notificationsData}
        renderItem={item => (
          <List.Item>
            <ListItem
              icon={item.icon}
              iconProps={item.iconProps}
              title={item.title}
              date={item.datetime}
            />
          </List.Item>
        )}
      />
    ),
  },
  {
    key: 'messages',
    title: i18.t('notification.menu.messages', { count: 3 }),
    icon: 'message',
    content: (
      <List
        footer={(
          <ListFooterItem href="#!">
            <T name="components.headerReadAll" />
            <Icon type="arrow-right" />
          </ListFooterItem>
        )}
        itemLayout="horizontal"
        dataSource={messagesData}
        renderItem={item => (
          <List.Item>
            <ListItem
              leftComponent={item.leftComponent}
              title={item.title}
              description={item.desc}
              date={item.datetime}
            />
          </List.Item>
        )}
      />
    ),
  },
  {
    key: 'tasks',
    title: i18.t('notification.menu.tasks', { count: 4 }),
    icon: 'profile',
    content: (
      <List
        footer={(
          <ListFooterItem href="#!">
            <T name="components.headerReadAll" />
            <Icon type="arrow-right" />
          </ListFooterItem>
        )}
        itemLayout="horizontal"
        dataSource={tasksData}
        renderItem={item => (
          <List.Item>
            <ListItem
              title={item.title}
              description={item.desc}
            />
          </List.Item>
        )}
      />
    ),
  },
];

const props = {
  // collapsed: layoutStore.collapsed,
  // mobileHidden: layoutStore.mobileClosed,
  // onCollapsed: this.handleCollapse,
  // onCloseMobile: this.handleMobileClose,

  pullLeft: (
    <React.Fragment>
      <Tooltip placement="bottom" title="Cabinet">
        <LayoutHeaderListItem componentClass={Link} href="/cabinet">
          <Icon type="shop" />
        </LayoutHeaderListItem>
      </Tooltip>
    </React.Fragment>
  ),
};


export default ({ storiesOf }) => (
  storiesOf('molecules', module)
    .add('LayoutHeader/1', () => (
      <LayoutHeader
        {...props}
        pullRight={(
          <React.Fragment>
            <LayoutHeaderSearchBox right placeholder={i18.t('header.search.placeholder')} />
            <LayoutHeaderNotifications
              content={(
                <LayoutHeaderNotificationsContent tabs={this.getNotificationsMenuTabs()} />
              )}
            >
              <LayoutHeaderListItem href="#!">
                <Badge count={1234}>
                  <LayoutNotificationIcon type="bell" />
                </Badge>
              </LayoutHeaderListItem>
            </LayoutHeaderNotifications>
            <LayoutHeaderChangeLocale code={i18.locale}>
              <HeaderDropdown>
                {config.locales.map(item => (
                  <Menu.Item key={item} onClick={() => uapp.setLocale2(item)}>
                    <FlagIcon code={item} />
                    <LocaleTitle>
                      <T name={`locales.${item}`} />
                    </LocaleTitle>
                  </Menu.Item>
                ))}
              </HeaderDropdown>
            </LayoutHeaderChangeLocale>
            <LayoutHeaderUserMenu
              user={user}
            >
              <HeaderDropdown>
                <If condition={user.name}>
                  <Menu.Item key="4" className="d-block d-md-none">
                    <T name="components.headerSignedAs" />
                    <strong>{user.name}</strong>
                  </Menu.Item>
                  <Menu.Divider className="d-block d-md-none" />
                </If>
                <Menu.Item key="1" disabled>
                  <Link href="/cabinet/profile">
                    <Icon type="setting" />
                    <T name="components.headerProfile" />
                  </Link>
                </Menu.Item>
                <Menu.Item key="0">
                  <a href="#!">
                    <Icon type="info-circle-o" />
About
                  </a>
                </Menu.Item>
                <Menu.Item key="2">
                  <a href="#!">
                    <Icon type="question-circle-o" />
Need Help?
                  </a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">
                  <Link href="/auth/logout">
                    <Icon type="logout" />
                    <T name="components.headerLogout" />
                  </Link>
                </Menu.Item>
              </HeaderDropdown>
            </LayoutHeaderUserMenu>
          </React.Fragment>
        )}
      />
    ))
    .add('LayoutHeader/2', () => (
      <LayoutHeader
        {...props}
        pullRight={(
          <LayoutHeaderListItem componentClass={Link} href="/auth">
            <T name="buttons.login" />
          </LayoutHeaderListItem>
        )}
      />
    ))
);
