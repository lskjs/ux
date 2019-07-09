import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import autobind from '@lskjs/autobind';
import Link from '@lskjs/ui/Link';
import Menu from 'antd/lib/menu';
import If from 'react-if';
import Horizontal from '../../atoms/Horizontal';
import ItemTitle from '../../atoms/ItemTitle';
import TinyLabel from '../../atoms/TinyLabel';
import { flexStyle, blockStyle, injectStyles } from './AdminMenu.styles';

injectStyles();

const { SubMenu, ItemGroup, Divider } = Menu;

const itemShape = {
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  label: PropTypes.number,
  href: PropTypes.string,
  hrefProps: PropTypes.object,
  componentClass: PropTypes.any,
};

const submenu = sub => ({
  submenu: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      ...itemShape,
      ...(sub ? submenu() : {}),
    }),
  ])),
});

class AdminMenu extends PureComponent {
  static propTypes = {
    active: PropTypes.array,
    onChange: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.shape({
      ...itemShape,
      ...submenu(true),
    })),
    mode: PropTypes.oneOf(['vertical', 'horizontal', 'inline']),
    theme: PropTypes.oneOf(['light', 'dark']),
    block: PropTypes.bool,
    flex: PropTypes.bool,
  }

  static defaultProps = {
    items: [],
    active: [],
    onChange: null,
    mode: 'horizontal',
    theme: 'dark',
    block: false,
    flex: false,
  }

  @autobind
  handleClick(e) {
    const { onChange } = this.props;
    if (onChange) onChange(e.keyPath);
  }

  @autobind
  renderLink(item, children) {
    const { componentClass: Component = Link, href, hrefProps = {}, props = {} } = item;
    const composedProps = {
      href,
      ...hrefProps,
      ...props,
    };
    return (
      <Component
        {...composedProps}
      >
        {children}
      </Component>
    );
  }

  @autobind
  renderLabel(item, sub) {
    const { icon, title, label } = item;
    return (
      <Horizontal verticalAlign="center">
        {/* <ItemTitle> */}
        {icon}
        {/* </ItemTitle> */}
        <ItemTitle>{title}</ItemTitle>
        <TinyLabel pullRight={sub} sticky={!sub}>{label}</TinyLabel>
      </Horizontal>
    );
  }

  @autobind
  renderItem(item, sub = false) {
    const { icon, label, title } = item;
    const renderBody = (
      <React.Fragment>
        <If condition={!!label}>
          {this.renderLabel(item, sub)}
        </If>
        <If condition={!label}>
          <React.Fragment>
            {icon}
            <span>{title}</span>
          </React.Fragment>
        </If>
      </React.Fragment>
    );
    return (
      <Menu.Item key={item.key} onClick={item.onClick}>
        {this.renderLink(item, renderBody)}
      </Menu.Item>
    );
  }

  render() {
    const {
      active,
      mode,
      theme,
      items,
      block,
      flex,
    } = this.props;
    return (
      <Menu
        className={cx({
          [blockStyle]: block,
          [flexStyle]: flex,
        })}
        onClick={this.handleClick}
        selectedKeys={active}
        mode={mode}
        theme={theme}
      >
        {items.map((item) => {
          if (item === 'divider' && mode !== 'horizontal') {
            return <Divider key={`${item.key}-${item}`} />;
          }
          if (item === 'divider') {
            return null;
          }
          if (item.submenu) {
            return (
              <SubMenu
                key={item.key}
                onTitleClick={e => this.handleClick({ ...e, keyPath: [item.submenu[0].key] })}
                title={(
                  <span className="submenu-title-wrapper">
                    {this.renderLink(item, item.label ? this.renderLabel(item, false) : item.title)}
                  </span>
                )}
              >
                {item.submenu.map((subItem) => {
                  if (subItem === 'divider') return <Divider key={`${item.key}-${subItem}`} />;
                  if (subItem.submenu) {
                    return (
                      <ItemGroup key={subItem.key} title={subItem.title}>
                        {subItem.submenu.map((groupItem) => {
                          if (groupItem === 'divider') {
                            return <Divider key={`${item.key}-${subItem.key}-${groupItem}`} />;
                          }
                          return this.renderItem(groupItem, true);
                        })}
                      </ItemGroup>
                    );
                  }
                  return this.renderItem(subItem, true);
                })}
              </SubMenu>
            );
          }
          return this.renderItem(item);
        })}
      </Menu>
    );
  }
}

export default AdminMenu;
