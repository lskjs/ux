import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Breadcrumb from 'antd/lib/breadcrumb';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
// import Container from '../../atoms/PageContainer';
import Breadcrumbs from '../UI/atoms/PageBreadcrumbs';
import Link from '../Link';

@inject('page')
@observer
class PageBreadcrumbs extends Component {
  render() {
    const {
      children,
      page,
      reverse,
      omitFirst,
      omitLast,
      // omitFirst = true,
      // omitLast = true,
      items: rawItems,
      ...props
    } = this.props;
    // console.log({ page });
    console.log('page.state', page.state);
    let metas = get(page, 'state.metas');
    if (reverse) {
      metas = metas.reverse();
    }

    let items = rawItems ? cloneDeep(rawItems) : metas.map((meta, key) => ({
      key,
      title: meta.title,
      href: meta.url,
    }));
    // console.log(111, {items});
    items = items.slice(omitFirst ? 1 : 0, omitLast ? items.length - 1 : items.length);
    // console.log(222, {items});
    // [
    //   {
    //     path: '',
    //     title: 'Главная',
    //   },
    //   {
    //     path: 'cabinet',
    //     title: 'Панель управления',
    //   },
    //   {
    //     path: 'events',
    //     title: 'Мероприятия',
    //   },
    // ];

    // const data = children;
    return (
      <Breadcrumbs {...props}>
        {children || (
          <Breadcrumb
            itemRender={(route) => {
              const { title, href } = route;
              if (href) {
                return (
                  <Link href={href}>
                    {title}
                  </Link>
                );
              }
              return (
                <span>
                  {title}
                </span>
              );
            }}
            routes={items}
          />
        )}
      </Breadcrumbs>
    );
  }
}

export default PageBreadcrumbs;
